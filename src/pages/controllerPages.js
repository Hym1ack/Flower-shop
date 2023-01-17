import homePageView from './homePageView';
import shopPageView from './shopPageView';
import productPageView from './productPageView';
import blogPageView from './blogPageView';
import aboutPageView from './aboutPageView';
import profilePageView from './profilePageView';
import cartPageView from './cartPageView';
import loginPageView from './loginPageView';
import registerPageView from './registerPageView';
import { init } from '../js/controller';

export const homePageInit = () => {
	homePageView.render();
	init();
};

export const shopPageInit = () => {
	shopPageView.render();
	init();
};

export const productPageInit = () => {
	productPageView.render();
	init();
};

export const blogPageInit = () => {
	blogPageView.render();
	init();
};

export const aboutPageInit = () => {
	aboutPageView.render();
	init();
};

export const profilePageInit = () => {
	profilePageView.render();
	init();
};

export const cartPageInit = () => {
	cartPageView.render();
	init();
};

export const loginPageInit = () => {
	loginPageView.render();
	init();
};

export const registerPageInit = () => {
	registerPageView.render();
	init();
};
