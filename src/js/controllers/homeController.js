import * as model from '../model';
import homePageView from '../../pages/homePageView';
import PostsView from '../views/postsView';
import LastCommentsView from '../views/lastCommentsView';
import BestProductsView from '../views/bestProductsView';

let bestProductsView;
let postsView;
let lastCommentsView;

export const initializeViews = () => {
	bestProductsView = new BestProductsView();
	postsView = new PostsView();
	lastCommentsView = new LastCommentsView();
};

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
		lastCommentsView.showLoader();

		const comments = await model.fetchComments();

		lastCommentsView.render(comments);
	} catch (error) {
		lastCommentsView.showError();
	}
};

export const homePageInit = () => {
	homePageView.render();

	initializeViews();

	bestProductsView.loadHandler(bestSellersController);
	postsView.loadHandler(latestPostsController);
	lastCommentsView.loadHandler(latestCommentsController);
};
