class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyItem);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
    }

    putProducts(id) {

    }
}
const localStorageUtil = new LocalStorageUtil();

const a = localStorageUtil.getPruducts();
console.log(a);
