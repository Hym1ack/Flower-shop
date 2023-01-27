import * as model from '../model';
import shopPageView from '../../pages/shopPageView';
import productsView from '../views/productsView';
import paginationView from '../views/paginationView';

const productsController = async () => {
	try {
		const { products } = model.state.catalog;
		productsView.showLoader();

		if (products.length === 0) {
			const response = await model.fetchPagination();
			model.setProductsToState(response);
		}

		productsView.render(products);
		paginationView.render(model.state.catalog.pagination);
	} catch (error) {
		console.log(error);
		productsView.showError();
	}
};

const filtersController = async (filterType) => {
	try {
		model.setSortType(filterType);

		const products = await model.fetchFilteredProducts();

		model.clearProductsInState();
		model.setProductsToState(products);

		productsView.update(model.state.catalog.products);
	} catch (error) {
		productsView.showError();
	}
};

const paginationConroller = async (page) => {
	try {
		model.setCurrPage(page);

		const products = await model.fetchPagination();

		model.clearProductsInState();
		model.setProductsToState(products);

		productsView.render(model.state.catalog.products);

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	} catch (error) {
		productsView.showError();
	}
};

export const shopPageInit = () => {
	shopPageView.render();
	productsView.loadHandler(productsController);
	productsView.filtersClickHandler(filtersController);
	productsView.togglePriceHandler();
	paginationView.paginationHandler(paginationConroller);
};
