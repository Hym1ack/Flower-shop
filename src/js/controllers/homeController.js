import {
	bestSellersController,
	latestCommentsController,
	latestPostsController,
} from '../controller';

import homePageView from '../../pages/homePageView';
import bestProductsView from '../views/bestProductsView';
import postsView from '../views/postsView';
import lastCommentsView from '../views/lastCommentsView';

export const homePageInit = () => {
	homePageView.render();
	bestProductsView.loadHandler(bestSellersController);
	postsView.loadHandler(latestPostsController);
	lastCommentsView.loadHandler(latestCommentsController);
};
