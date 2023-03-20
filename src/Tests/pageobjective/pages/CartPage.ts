import { Selector, t } from 'testcafe';

export default class CartPage {
    static pageTitle = Selector('.subheader');
    static cartIcon = Selector('.shopping_cart_link');
    static checkoutButton = Selector('.btn_action.checkout_button');

    static async cartItemNames() {
        return Selector('.cart_item .inventory_item_name');
    }
}
