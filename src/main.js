import localStorageUtil from './utils/localStorageUtil.js';
import productsPage from './components/Products/Products.js';
import headerPage from './components/Header/Header.js';

productsPage.render();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
