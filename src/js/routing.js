import { homePageInit } from './controllers/homeController';
import { shopPageInit } from './controllers/shopController';

const routes = {
	'/': homePageInit,
	'/shop': shopPageInit,
	// '/product': productPageInit,
	// '/blog': blogPageInit,
	// '/about': aboutPageInit,
	// '/profile': profilePageInit,
	// '/cart': cartPageInit,
	// '/login': loginPageInit,
	// '/registration': registerPageInit,
};

const loadPage = () => routes[window.location.pathname]();

loadPage();

window.addEventListener('popstate', () => {
	loadPage();
});

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
