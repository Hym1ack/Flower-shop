import * as model from './model';
import bestProductsView from './views/bestProductsView';
import postsView from './views/postsView';

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

const init = () => {
	bestProductsView.loadHandler(bestSellersController);
	postsView.loadHandler(latestPostsController);
};

init();
