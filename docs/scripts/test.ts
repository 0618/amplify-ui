const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  const service = new chrome.ServiceBuilder(
    '/Users/zhamujun/Amplify-workplace/amplify-ui/docs/scripts/chromedriver_mac64/chromedriver'
  );
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(service)
    .build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
