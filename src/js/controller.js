import * as model from './model';
import bestProductsView from './views/bestProductsView';
import postsView from './views/postsView';
import LastCommentsView from './views/lastCommentsView';
import productsView from './views/productsView';

const bestSellersController = async () => {
	try {
		bestProductsView.showLoader();

		const products = await model.fetchProducts(false, 4);

		bestProductsView.render(products);
	} catch (error) {
		bestProductsView.showError();
	}
};

const latestPostsController = async () => {
	try {
		postsView.showLoader();
		const posts = await model.fetchPosts();

		postsView.render(posts);
	} catch (error) {
		postsView.showError();
	}
};

const latestCommentsController = async () => {
	try {
		LastCommentsView.showLoader();

		const comments = await model.fetchComments();

		LastCommentsView.render(comments);
	} catch (error) {
		LastCommentsView.showError();
	}
};

const productsConroller = async () => {
	try {
		const { products } = model.state.catalog;
		productsView.showLoader();

		if (products.length === 0) {
			const response = await model.fetchProducts(true, 20);
			model.setProductsToState(response);
		}

		productsView.render(products);
	} catch (error) {
		productsView.showError();
	}
};

export const init = () => {
	bestProductsView.loadHandler(bestSellersController);
	postsView.loadHandler(latestPostsController);
	LastCommentsView.loadHandler(latestCommentsController);
	productsView.loadHandler(productsConroller);
};
