module.exports.config = {
  baseUrl: "https://walmyr-filho.com/",
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
