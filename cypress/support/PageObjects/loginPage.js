class loginPage {
  loginButton = "button.orangehrm-login-button";
  userNameInputField = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
  passwordInputField = 'input[name="password"]';
  ohrmLogo = ".orangehrm-login-branding img";
  forgotPassText = ".orangehrm-login-forgot-header";
  ohrmDemoCredentials = ".oxd-sheet";
  username = ".oxd-sheet > p:nth-child(1)";
  password = ".oxd-sheet > p:nth-child(2)";
  dashboardText = ".oxd-text--h6"
}

export const loginpage = new loginPage();
