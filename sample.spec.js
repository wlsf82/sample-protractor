const helper = require("protractor-helper");

describe("Sample test suite", () => {
  beforeEach(() => browser.get(""));

  it("Sample test case", () => {
    const footer = element(by.css("footer"));

    helper.scrollToElement(footer);
  });

  it("Another sample test case", () => {
    const headerHeading = element(by.css("header h1"));

    helper.waitForTextToBePresentInElement(headerHeading, "Walmyr");
  });

  it("One more sample test case", () => {
    expect(helper.isCurrentUrlDifferentFromBaseUrl()).toBe(false);
  });

  it("Final sample test case", () => {
    helper.setTimeout();
  });
});
