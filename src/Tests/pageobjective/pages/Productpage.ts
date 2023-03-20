import { Selector, t } from 'testcafe';

export interface ProductInfo {
    name: string;
    description: string;
    price: string;
}

export default class ProductsPage {
    static pageTitle = Selector('.product_label');
    static productItem = Selector('.inventory_item');
    static addToCartButton = Selector('.btn_primary.btn_inventory');

    static async getProductInfo(index: number): Promise<ProductInfo> {
        const product = this.productItem.nth(index);
        return {
            name: await product.find('.inventory_item_name').innerText,
            description: await product.find('.inventory_item_desc').innerText,
            price: await product.find('.inventory_item_price').innerText
        };
    }

    static async addProductToCart(index: number) {
        await t.click(this.productItem.nth(index).find('.btn_primary.btn_inventory'));
    }
}
