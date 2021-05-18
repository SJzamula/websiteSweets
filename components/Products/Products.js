class Products {
  constructor() {
    this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    
    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
  }

  render() {     
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    for (const element of CATALOG) {
      let activeClass = '';
      let activeText = '';

      if ( !(productsStore.includes(element.id)) ) {
        activeText = this.labelAdd;
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class="products-element">
          <span class="products-element__name">${element.name}</span>
          <img class="products-element__img" src ="${element.img}" />
          <span class="products-element__price"> 
            🔥➜ ${element.price} UAH
          </span>
          <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${element.id}');">
            ${activeText}
          </button>
        </li>  
      `;
    }

    const html = `
    <ul class="products-container">
    ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();