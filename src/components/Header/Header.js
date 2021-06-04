class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }
    
  render(count) {
    const html = `
      <div class="header-container">
        <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
          🛒${count}
        </div>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
};

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);


/*
render(count) {
  const html = '🛒' + count;
  document.getElementById('header-container') = addHtml;
  headerPage.addEventListener('click', handlerOpenShoppingPage());
} 
*/
module.exports;