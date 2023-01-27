import View from './view';

class ProductsView extends View {
	_error = 'Products is 404';

	#menu;

	#filterBtn;

	#toogleBtn;

	loadHandler(handler) {
		this._parent = document.querySelector('.shop__cards');

		if (!this._parent) return;

		handler();
	}

	filtersClickHandler(handler) {
		this.toggleFilterMenu();

		this.#menu.addEventListener('click', (e) => {
			const { target } = e;
			const menuItems = Array.from(this.#menu.children);

			if (target.dataset.sort) {
				this.removeClassName(menuItems);
				target.classList.add('menu-item_selected');
				handler(target.dataset.sort);
			}

			this.#menu.classList.remove('filter-menu_open');
		});

		this._closeModal();
	}

	togglePriceHandler() {
		this.#toogleBtn = document.querySelector('.sort');

		this.#toogleBtn.addEventListener('click', () => {
			const sortType = this.#toogleBtn.getAttribute('data-price');
			const sortImg = this.#toogleBtn.querySelector('.sort__img');

			if (sortType === 'asc') {
				this.#toogleBtn.setAttribute('data-price', 'desc');
				sortImg.classList.remove('sort__img_asc');
				sortImg.classList.add('sort__img_desc');
			}

			if (sortType === 'desc') {
				this.#toogleBtn.setAttribute('data-price', '');
				sortImg.classList.remove('sort__img_desc');
			}

			if (sortType === '') {
				this.#toogleBtn.setAttribute('data-price', 'asc');
				sortImg.classList.add('sort__img_asc');
			}
		});
	}

	_createLayout() {
		return this._data.map(
			(card) => `
      <div class="product__card">
        <a href="#" class="product__card-link">
          <img src="${card.photo}" alt="flower-1" class="product__card-img" />
        </a>
        <h5 class="product__card-title">${card.title} - ${card.rating}</h5>
        <div class="product__card-shop">
          <div class="product__card-price">${card.price}$</div>
          <button class="product__card-add">Add to cart</button>
        </div>
      </div>
    `
		);
	}

	toggleFilterMenu() {
		this.#menu = document.querySelector('.filter-menu');
		this.#filterBtn = document.querySelector('.filter__btn');

		if (!this.#filterBtn) return;

		this.#filterBtn.addEventListener('click', () => {
			this.#menu.classList.toggle('filter-menu_open');
		});

		this._closeModal();
	}

	_closeModal() {
		document.addEventListener('click', (e) => {
			const clickInside = e.composedPath();

			const clickOutside =
				!clickInside.includes(this.#menu) &&
				!clickInside.includes(this.#filterBtn);

			if (clickOutside) {
				this.#menu.classList.remove('filter-menu_open');
			}
		});
	}

	removeClassName(arr = []) {
		arr.forEach((item) => {
			item.classList.remove('menu-item_selected');
		});
	}
}

export default new ProductsView();
