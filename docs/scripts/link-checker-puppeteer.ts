import { sitePaths } from '../src/data/sitePaths';
import {
  checkLink,
  crawlAllLinksFromAllPages,
  runArrayPromiseInOrder,
} from './util';

/**
 * Divide the sitePaths array to
 * 1)prevent the socket hang up issue on local and
 * 2) save time for testing
 */
if (![3, 4].includes(process.argv.length)) {
  console.error('Expected 3 or 4 arguments!');
  process.exit(1);
}

const start = process.argv[2];
const end = process.argv[3];
const testPaths = end ? sitePaths.slice(+start, +end) : sitePaths.slice(+start);

async function main() {
  const allPagesPaths = await crawlAllLinksFromAllPages(testPaths);

  await runArrayPromiseInOrder(
    [...allPagesPaths],
    async ([pageIdx, { pageUrl, links }]) => {
      await runArrayPromiseInOrder(
        links.map((link) => ({ ...link, pageIdx, pageUrl })),
        checkLink
      );
    }
  );

  [...allPagesPaths].map(([pageIdx, { pageUrl, links }]) => {
    console.log(`#${pageIdx}, ${pageUrl} has ${links.length} links`);
  });
}

main();
