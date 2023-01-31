import { getDocs, collection, getCountFromServer } from 'firebase/firestore';

import { database } from './firebase';

import { PRODUCTS_PER_PAGE } from './utils/constants';

import {
	createQueryWithLimit,
	createQueryWithRating,
	createQueryByFilter,
	createQueryPagination,
} from './queryCreators';
import { setURLParams } from './utils/helpers';

export const state = {
	catalog: {
		products: [],
		sortBy: { filterSort: '', priceSort: '' },
		pagination: {
			currPage: 1,
			pagesCount: 0,
		},
	},
};

export const clearProductsInState = () => {
	state.catalog.products.length = 0;
};

export const setProductsToState = (products) => {
	state.catalog.products.push(...products);
};

export const setSortType = (type) => {
	setURLParams({ name: 'sort', value: type });

	state.catalog.sortBy.filterSort = type;
};

export const setPriceType = (type) => {
	setURLParams({ name: 'price', value: type });

	state.catalog.sortBy.priceSort = type;
};

export const setCurrPage = (page) => {
	setURLParams({ name: 'page', value: page });

	state.catalog.pagination.currPage = page;
};

const fetchItems = async (collectionQuery) => {
	const querySnapshot = await getDocs(collectionQuery);

	const arr = [];

	querySnapshot.forEach((doc) => {
		arr.push(doc.data());
	});

	return arr;
};

export const fetchProducts = async (isLimit, queryLimit = PRODUCTS_PER_PAGE) => {
	const collectionRef = collection(database, 'products');

	const collectionQuery = isLimit
		? createQueryWithLimit(collectionRef, queryLimit)
		: createQueryWithRating(collectionRef, queryLimit);

	return fetchItems(collectionQuery);
};

export const fetchPagination = async () => {
	const collectionRef = collection(database, 'products');

	const { pagination, sortBy } = state.catalog;

	const collectionQuery = createQueryPagination(collectionRef, {
		...pagination,
		...sortBy,
	});

	return fetchItems(collectionQuery);
};

export const fetchComments = async () => {
	const collectionRef = collection(database, 'comments');

	const collectionQuery = createQueryWithLimit(collectionRef, 3);

	return fetchItems(collectionQuery);
};

export const fetchPosts = async () => {
	const collectionRef = collection(database, 'posts');

	const collectionQuery = createQueryWithLimit(collectionRef, 3);

	return fetchItems(collectionQuery);
};

export const fetchFilteredProducts = async () => {
	const collectionRef = collection(database, 'products');

	const collectionQuery = createQueryByFilter(
		collectionRef,
		state.catalog.sortBy.filterSort
	);

	return fetchItems(collectionQuery);
};

(async () => {
	const collectionRef = collection(database, 'products');
	const productsLength = await getCountFromServer(collectionRef);

	state.catalog.pagination.pagesCount = Math.ceil(
		productsLength.data().count / PRODUCTS_PER_PAGE
	);
})();

// dev
window.state = state;
