import shopPageView from '../../pages/shopPageView';
import { productsConroller } from '../controller';
import productsView from '../views/productsView';

export const shopPageInit = () => {
	shopPageView.render();
	productsView.loadHandler(productsConroller);
};
