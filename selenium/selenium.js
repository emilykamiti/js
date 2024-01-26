const { Builder } = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('file:///home/nasinza/Desktop/JavaScript/complete-javascript-course-master/01-Fundamentals-Part-1/starter/index.html');

    await driver.quit();
})();