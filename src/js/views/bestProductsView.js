import View from './view';

class BestProductsView extends View {
	_error = 'Products is 404';

	_parent = document.querySelector('.best-sellers_products');

	loadHandler(handler) {
		if (!this._parent) return;

		handler();
	}

	_createLayout() {
		return this._data.map(
			(product) =>
				`<div class="product__card">
        <a href="./pages/product.html" class="product__card-link">
            <img class="product__card-img" src=${product.photo} alt=${product.title}>
        </a>
        <h5 class="product__card-title">${product.title}</h5>
        <div class="product__card-shop">
          <div class="product__card-price">${product.price}$</div>
          <button class="product__card-add">Add to cart</button>
        </div>
      </div>`
		);
	}
}

export default BestProductsView;
