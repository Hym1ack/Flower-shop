import View from './view';

class PaginationView extends View {
	_error = 'Pagination is 404';

	_parent = document.querySelector('.pagination');

	_createLayout() {
		const { currPage, pagesCount } = this._data;

		return this.createPagination(currPage, pagesCount);
	}

	paginationHandler(handler) {
		this._parent.addEventListener('click', (e) => {
			const page = +e.target.textContent;
			handler(page);
		});
	}

	createPagination(currPage, pagesCount) {
		const block = [];
		block.push('<button><</button>');

		for (let i = 0; i < pagesCount; i += 1) {
			const elem = `<button class="${i + 1 === currPage ? 'active' : ''}">${
				i + 1
			}</button>`;

			block.push(elem);
		}

		block.push('<button>></button>');

		return block;
	}
}

export default PaginationView;
