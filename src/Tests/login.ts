import { Selector } from 'testcafe';

const usernameInput = Selector('#user-name');
const passwordInput = Selector('#password');
const submitButton = Selector('#login-button');

fixture `Test structure`
    .page `https://www.saucedemo.com`;

test('First test in TC', async t => {
    await t
        .maximizeWindow()
        .typeText(usernameInput,'performance_glitch_user')
        .wait(2000)
        .typeText(passwordInput, 'secret_sauce')
        .wait(2000)
        .click(submitButton)   
        
});

test('Learn user actions- Type text', async t => {
    await t
});
