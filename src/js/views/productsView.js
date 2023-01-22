import View from './view';

class ProductsView extends View {
	loadHandler(handler) {
		this._parent = document.querySelector('.products__cards');

		if (!this._parent) return;

		handler();
	}

	_createLayout() {
		return this._data.map(
			(card) => `
      <div class="product__card">
        <a href="#" class="product__card-link">
          <img src="${card.photo}" alt="flower-1" class="product__card-img" />
        </a>
        <h5 class="product__card-title">${card.title}</h5>
        <div class="product__card-shop">
          <div class="product__card-price">${card.price}$</div>
          <button class="product__card-add">Add to cart</button>
        </div>
      </div>
    `
		);
	}
}

export default new ProductsView();
