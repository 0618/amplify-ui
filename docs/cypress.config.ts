import https from 'https';
import http from 'http';
import { getHeapStatistics } from 'v8';
import { defineConfig } from 'cypress';
import { BASE_URL } from './cypress/data/constants';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log: (message) => {
          console.log(message);
          return null;
        },
        httpGet: async (url: string) => {
          console.log('📞[REQUESTING...]', url);
          const request = url.includes('https') ? https : http;
          const promise: Promise<number> = new Promise(async (res, rej) => {
            await request.get(url, ({ statusCode = 0 }) => {
              res(statusCode);
            });
          });
          return await promise;
        },
      });
    },
    baseUrl: BASE_URL,
    numTestsKeptInMemory: 1,
    supportFile: false,
    video: false,
  },
});
