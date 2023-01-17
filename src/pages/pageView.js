class PageView {
	_root = document.querySelector('.root');

	render() {
		const markup = this._createLayout();

		this._clearPage();

		this._root.insertAdjacentHTML('beforeend', markup);
	}

	_clearPage() {
		this._root.innerHTML = '';
	}
}

export default PageView;
