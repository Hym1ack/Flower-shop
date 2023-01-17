import {
	homePageInit,
	shopPageInit,
	productPageInit,
	blogPageInit,
	aboutPageInit,
	profilePageInit,
	cartPageInit,
	loginPageInit,
	registerPageInit,
} from '../pages/controllerPages';

const routes = {
	'/': homePageInit,
	'/shop': shopPageInit,
	'/product': productPageInit,
	'/blog': blogPageInit,
	'/about': aboutPageInit,
	'/profile': profilePageInit,
	'/cart': cartPageInit,
	'/login': loginPageInit,
	'/registration': registerPageInit,
};

const initRoutes = () => {
	const loadPage = routes[window.location.pathname];

	loadPage();

	window.addEventListener('popstate', loadPage);
};

initRoutes();

const navigate = (path) => {
	window.history.pushState({}, path, window.location.origin + path);

	routes[path]();
};

document.querySelectorAll('a').forEach((link) =>
	link.addEventListener('click', (e) => {
		e.preventDefault();

		const path = e.currentTarget.getAttribute('href');

		navigate(path);
	})
);
