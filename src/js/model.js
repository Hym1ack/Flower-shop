import {
	query,
	// eslint-disable-next-line no-unused-vars
	where,
	// eslint-disable-next-line no-unused-vars
	orderBy,
	limit,
	getDocs,
	collection,
} from 'firebase/firestore';

import { database } from './firebase';

export const state = {
	catalog: {
		products: [],
	},
};

const createQueryWithLimit = (collectionRef, queryLimit = 4) =>
	query(collectionRef, limit(queryLimit));

const createQueryWithRating = (collectionRef, queryLimit = 4) =>
	query(collectionRef, where('rating', '>=', 4.91), limit(queryLimit));

const fetchItems = async (collectionQuery) => {
	const querySnapshot = await getDocs(collectionQuery);

	const arr = [];

	querySnapshot.forEach((doc) => {
		arr.push(doc.data());
	});

	return arr;
};

export const fetchProducts = async (isLimit, queryLimit) => {
	const collectionRef = collection(database, 'products');

	const collectionQuery = isLimit
		? createQueryWithLimit(collectionRef, queryLimit)
		: createQueryWithRating(collectionRef, queryLimit);

	const items = fetchItems(collectionQuery);

	return items;
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

export const setProductsToState = (products) => {
	state.catalog.products.push(...products);
};

// dev
window.state = state;
