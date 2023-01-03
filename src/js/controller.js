import * as model from './model';
import bestProductsView from './views/bestProductsView';
import postsView from './views/postsView';
import LastCommentsView from './views/lastCommentsView';

const bestSellersController = async () => {
	try {
		bestProductsView.showLoader();

		const products = await model.fetchItems({
			fetchLimit: 4,
			fieldPath: 'rating',
			fieldSort: 'rating',
			directionStr: 'desc',
			opStr: '>=',
			value: 4.9,
			collectionType: 'products',
		});

		bestProductsView.render(products);
	} catch (error) {
		bestProductsView.showError();
	}
};

const latestPostsController = async () => {
	try {
		postsView.showLoader();
		const posts = await model.fetchItems({
			fetchLimit: 3,
			collectionType: 'posts',
			fieldSort: 'date',
			directionStr: 'desc',
		});

		postsView.render(posts);
	} catch (error) {
		postsView.showError();
	}
};

const latestCommentsController = async () => {
	try {
		LastCommentsView.showLoader();

		const comments = await model.fetchItems({
			fetchLimit: 3,
			collectionType: 'comments',
			fieldSort: 'date',
			directionStr: 'desc',
		});

		LastCommentsView.render(comments);
	} catch (error) {
		LastCommentsView.showError();
	}
};

export const init = () => {
	bestProductsView.loadHandler(bestSellersController);
	postsView.loadHandler(latestPostsController);
	LastCommentsView.loadHandler(latestCommentsController);
};
