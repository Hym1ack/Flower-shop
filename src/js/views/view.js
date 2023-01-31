import loader from '../../assets/img/loader.svg';

class View {
	_data;

	render(data) {
		if (!data) return;

		this._data = data;
		const markup = this._createLayout();

		this._clearLayout();
		this._parent.insertAdjacentHTML('beforeend', markup.join(''));
	}

	update(data) {
		this._data = data;

		const newMarkup = this._createLayout();

		const newDOM = document.createRange().createContextualFragment(newMarkup);
		const newElements = Array.from(newDOM.querySelectorAll('*'));
		const curElements = Array.from(this._parent.querySelectorAll('*'));

		if (newElements.length > curElements.length) {
			this.render(this._data);
		}

		curElements.forEach((curEl, i) => {
			const newEl = newElements[i];

			if (i >= newElements.length) {
				curElements[i]?.remove();
			} else {
				this.#checkNodeEqual(newEl, curEl);
			}
		});
	}

	#checkNodeEqual(newEl, curEl) {
		if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
			// eslint-disable-next-line no-param-reassign
			curEl.textContent = newEl.textContent;
		}

		if (!newEl.isEqualNode(curEl))
			Array.from(newEl.attributes).forEach((attr) =>
				curEl.setAttribute(attr.name, attr.value)
			);
	}

	showLoader() {
		this._parent.innerHTML = `<img class="loader" src=${loader} alt="loading..." />`;
	}

	showError() {
		this._parent.innerHTML = `<p class="error">${this._error}</p>`;
	}

	_clearLayout() {
		this._parent.innerHTML = '';
	}
}

export default View;
