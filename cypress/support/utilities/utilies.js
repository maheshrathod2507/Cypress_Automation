class Utils {
  checkElementVisibility(ele) {
    return cy.get(ele).should("be.visible");
  }

  checkElementEnable(ele) {
    return cy.get(ele).should("be.enabled");
  }

  clickOn(ele) {
    if (this.checkElementVisibility(ele)) {
      return cy.get(ele).click();
    } else {
      return cy.log("Failed to click");
    }
  }

  clearEnterText(ele, value) {
    if (this.checkElementVisibility(ele)) {
      return utils.getElement(ele).clear().type(value);
    } else {
      return cy.log("Element is not visible");
    }
  }

  getElement(ele) {
    if (ele.startsWith("/") || ele.startsWith("(")) {
      return cy.xpath(ele, {
        timeout: "20000",
      });
    } else {
      return cy.get(ele, {
        timeout: "20000",
      });
    }
  }

  getText(ele) {
    return this.getElement(ele).invoke("text");
  }
}
export const utils = new Utils();
