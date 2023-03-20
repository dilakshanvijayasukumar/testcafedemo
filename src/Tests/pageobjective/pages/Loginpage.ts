import { Selector, t } from 'testcafe';

export default class LoginPage {
    static usernameField = Selector('#user-name');
    static passwordField = Selector('#password');
    static loginButton = Selector('#login-button');
    static errorMessage = Selector('.error-message-container.error');

    static async login(username: string, password: string) {
        await t.typeText(this.usernameField, username)
               .typeText(this.passwordField, password)
               .click(this.loginButton);
    }
}
