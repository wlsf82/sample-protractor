module.exports.config = {
  baseUrl: "http://walmyr-filho.com/",
  directConnect: true,
  specs: ["*.spec.js"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless"]
    }
  },
  onPrepare() {
    browser.waitForAngularEnabled(false);
  }
};
