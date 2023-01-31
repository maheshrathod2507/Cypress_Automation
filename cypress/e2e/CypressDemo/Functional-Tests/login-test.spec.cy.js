const { loginpage } = require("../../../support/PageObjects/loginPage");
const { utils } = require("../../../support/utilities/utilies");

let userdata;
describe("Validate login page", () => {
  before(() => {
    cy.visit("/login");
    cy.fixture("example").then(function (data) {
      userdata = data;
    });
  });

  it("Validate visiblity of elements on login page", function () {
    utils.checkElementEnable(loginpage.userNameInputField);
    utils.checkElementEnable(loginpage.passwordInputField);
    utils.checkElementVisibility(loginpage.loginButton);
    utils.checkElementVisibility(loginpage.ohrmDemoCredentials);
    utils.checkElementVisibility(loginpage.ohrmLogo);
  });

  it("Verify login without entering credentials", () => {
    utils.getElement(loginpage.userNameInputField).clear().type("  ");
    utils.getElement(loginpage.passwordInputField).clear().type("    ");
    utils.checkElementVisibility(loginpage.dashboardText);
  });

  it("Verify login by leaving any of the field blank", () => {
    utils.getElement(loginpage.userNameInputField).clear().type("   ");
    utils.getElement(loginpage.passwordInputField).clear().type("admin123");
    utils.checkElementVisibility(loginpage.dashboardText);
  });

  it("Verify login by entering wrong credentials", () => {
    utils.getElement(loginpage.userNameInputField).clear().type("asdfgfg");
    utils.getElement(loginpage.passwordInputField).clear().type("adfghnncfd");
    utils.checkElementVisibility(loginpage.dashboardText);
  });

  it("Verify login to the application", () => {
    cy.login(userdata.userName, userdata.passWord);
  });
});
