import { PromisePool } from '@supercharge/promise-pool';
import { sitePaths } from '../src/data/sitePaths';
import { checkLink, crawlAllLinks } from './util';
import type { LinkInfo } from './util';

/**
 * Divide the sitePaths array so that we can easily run a smaller portion if needed.
 * e.g. to run the first 10 links. run `yarn docs node --require esbuild-register ./scripts/link-checker-puppeteer.ts 0 10`
 */
const start = process.argv[2] ?? 0;
const end = process.argv[3];
const testPaths = end ? sitePaths.slice(+start, +end) : sitePaths.slice(+start);

try {
  runLinkChecker();
} catch (err) {
  process.exit(1);
}

async function runLinkChecker() {
  const allPagesPaths = await crawlAllLinks(testPaths);
  const errorLinks: Set<LinkInfo> = new Set();

  await PromisePool.withConcurrency(10)
    .for(Array.from(allPagesPaths))
    .process(async ([pageIdx, { pageUrl, links }], i, pool) => {
      await PromisePool.withConcurrency(10)
        .for(links)
        .process(async ({ href, tagName, tagText }, linkIdx, pool) => {
          await checkLink(
            { href, tagName, tagText, pageUrl, pageIdx },
            linkIdx,
            errorLinks
          );
        });
    });

  const allPagePaths = Array.from(allPagesPaths).map(
    ([pageIdx, { pageUrl, links }]) => ({
      pageUrl,
      numberOfLinks: links.length,
    })
  );

  await console.table(allPagePaths);

  reportResult(errorLinks);
}

function reportResult(errorLinks: Set<LinkInfo>) {
  if (errorLinks.size) {
    Array.from(errorLinks).forEach(
      ({ statusCode, pageIdx, linkIdx, href, tagName, tagText, pageUrl }) => {
        console.error(
          `❌ [RETURNING STATUS...] ${statusCode} for page #${pageIdx} link #${linkIdx} -- ${href} from ${tagName} tag "${tagText}" on  page ${pageUrl}`
        );
      }
    );
    throw new Error(`${errorLinks.size} broken links found`);
  } else {
    console.log('🎉 All links look good!');
  }
}
