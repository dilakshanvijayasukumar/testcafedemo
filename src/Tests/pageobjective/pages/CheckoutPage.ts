import { Selector, t } from 'testcafe';
import faker from '@faker-js/faker'; 

export default class CheckoutPage {
    static pageTitle = Selector('.subheader');
    static firstNameField = Selector('#first-name');
    static lastNameField = Selector('#last-name');
    static zipCodeField = Selector('#postal-code');
    static continueButton = Selector('.btn_primary.cart_button');
    static finishButton = Selector('.btn_action.cart_button');

    static async enterUserInfo(firstName: string, lastName: string, zipCode: string) {
        await t.typeText(this.firstNameField, firstName)
               .typeText(this.lastNameField, lastName)
               .typeText(this.zipCodeField, zipCode);
    }
}
