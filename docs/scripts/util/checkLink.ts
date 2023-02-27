import https from 'https';
import http from 'http';
import { IGNORED_LINKS } from '../../src/data/ignoredLinks';
import { sitePaths } from '../../src/data/sitePaths';

const requestedUrl: Set<string> = new Set();
export async function checkLink(
  {
    href,
    tagName,
    tagText,
    pageIdx,
    pageUrl,
  }: {
    href: string;
    tagName: string;
    tagText: string;
    pageIdx: string;
    pageUrl: string;
  },
  linkIdx: number
) {
  return new Promise(async (res, rej) => {
    if (
      IGNORED_LINKS.includes(href) ||
      sitePaths.includes(href) ||
      requestedUrl.has(href)
    ) {
      console.log(
        `⏭[SKIPPING...] link #${linkIdx} ${href} from ${tagName} tag "${tagText}" on page #${pageIdx} ${pageUrl}, because it is on the IGNORED_LINKS list, on the Sitemap, or have already requested.`
      );
      res(0);
    } else if (href.includes('https:')) {
      const request = await https.get(href, async ({ statusCode = 0 }) => {
        await returnStatus({ statusCode, href });
        requestedUrl.add(href);
        res(statusCode);
      });
      request.end();
    } else {
      const request = await http.get(href, async ({ statusCode = 0 }) => {
        await returnStatus({ statusCode, href });
        requestedUrl.add(href);
        res(statusCode);
      });
      request.end();
    }
  });

  async function returnStatus({
    statusCode,
    href,
  }: {
    statusCode: number;
    href: string;
  }) {
    if ([200, 301, 303, 308].includes(statusCode)) {
      console.log(
        `↩️ [RETURNING STATUS...] ${statusCode} page #${pageIdx} link #${linkIdx} -- ${href} from ${tagName} tag "${tagText}" on page ${pageUrl}`
      );

      /**
       * If 308, check if it's a internal direction (see docs/next.config.js redirects logic)
       * If it's internal direction, after adding the platform, it should be 200
       * Otherwise, the link needs to be updated
       */
      if (statusCode === 308) {
        const hostNameRegex = /http(s)?:\/\/[^/]*/i;
        const platform = pageUrl.replace(hostNameRegex, '').split('/')[1];
        const newHref = `${
          href.match(hostNameRegex)[0]
        }/${platform}${href.replace(hostNameRegex, '')}`;
        console.log(
          `🔁 [Redirecting...] link #${linkIdx} ${href} to ${newHref}`
        );
        await checkLink(
          { href: newHref, tagName, tagText, pageIdx, pageUrl },
          linkIdx
        );
      }
    } else {
      throw new Error(
        `❌ [RETURNING STATUS...] ${statusCode} for page #${pageIdx} link #${linkIdx} -- ${href} from ${tagName} tag "${tagText}" on  page ${pageUrl}`
      );
    }
  }
}
