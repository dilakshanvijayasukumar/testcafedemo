import { Selector } from 'testcafe';
import {faker} from '@faker-js/faker';
import LoginPage from '../pages/Loginpage';
import Productpage from '../pages/Productpage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

fixture `Login Test`
    .page `https://www.saucedemo.com`;

test('Login with valid credentials, add two products to the cart, and proceed to checkout', async t => {
    await LoginPage.login('performance_glitch_user', 'secret_sauce');
    await t.expect(Productpage.pageTitle.innerText).eql('Products');

    // Add two products to the cart
    const product1 = await Productpage.getProductInfo(0);
    const product2 = await Productpage.getProductInfo(1);
    await Productpage.addProductToCart(0);
    await Productpage.addProductToCart(1);

    // Go to cart
    await t.click(CartPage.cartIcon);
    await t.expect(CartPage.pageTitle.innerText).eql('Your Cart');

    // Verify that the selected items are in the cart
    const cartItemNames = await CartPage.cartItemNames();
    await t.expect(cartItemNames.count).eql(2);
    await t.expect(cartItemNames.nth(0).innerText).eql(product1.name);
    await t.expect(cartItemNames.nth(1).innerText).eql(product2.name);

    // Click checkout button
    await t.click(CartPage.checkoutButton);
    await t.expect(CheckoutPage.pageTitle.innerText).eql('Checkout: Your Information');

    // Generate random user information
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const zipCode = faker.address.zipCode();

    // Enter user information
    await CheckoutPage.enterUserInfo(firstName, lastName, zipCode);

    // Click continue button
    await t.click(CheckoutPage.continueButton);
    await t.expect(CheckoutPage.pageTitle.innerText).eql('Checkout: Overview');
});
