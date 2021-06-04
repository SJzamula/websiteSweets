import { ROOT_SHOPPING } from '../../constants/root.js';
import localStorageUtil from '../../utils/localStorageUtil.js';
import CATALOG from '../../constants/catalog.js';

class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = '';
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    for (const element of CATALOG) {
      if (productsStore.indexOf(element.id) !== -1) {
        htmlCatalog += `
          <tr>
            <td class="shopping-element__name">${element.name}</td>
            <td class="shopping-element__price">
              ${element.price.toLocaleString()} USD
            </td>
          </tr>
        `;
        sumCatalog += element.price;
      }
    }

    const html = `
      <div class="shopping-container">
        <div class="shopping__close" onclick="shoppingPage.handleClear"></div>
        <table>
          ${htmlCatalog}
          <tr>
            <td class="shopping-element__name">Сумма: </td>
            <td class="shopping-element__price">
              ${sumCatalog.toLocaleString()} USD
            </td>
          </tr>
        </table>
      </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

export default new Shopping();
