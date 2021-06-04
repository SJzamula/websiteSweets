import shoppingPage from '../Shopping/Shopping.js';
import { ROOT_HEADER } from '../../constants/root.js';

class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
      <div class="header-container">
        <div class="header-counter" 
        onclick="headerPage.handlerOpenShoppingPage();">
          🛒${count}
        </div>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}

export default new Header();
