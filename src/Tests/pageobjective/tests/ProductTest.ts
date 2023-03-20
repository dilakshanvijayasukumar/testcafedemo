import { Selector, t } from 'testcafe';

class ProductsPage {
    public pageTitle: Selector;
    public addToCartButtons: Selector;

    constructor() {
        this.pageTitle = Selector('.product_label');
        this.addToCartButtons = Selector('.btn_primary.btn_inventory');
    }

    async addProductToCart(index: number) {
        await t
            .click(this.addToCartButtons.nth(index))
    }
}