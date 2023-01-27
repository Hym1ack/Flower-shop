import {
	query,
	// eslint-disable-next-line no-unused-vars
	where,
	// eslint-disable-next-line no-unused-vars
	orderBy,
	limit,
	startAt,
	endAt,
} from 'firebase/firestore';

import { PRODUCTS_PER_PAGE } from './constants';

export const createQueryWithLimit = (collectionRef) =>
	query(collectionRef, limit(PRODUCTS_PER_PAGE));

export const createQueryWithRating = (collectionRef, queryLimit = 4) =>
	query(collectionRef, where('rating', '>=', 4.91), limit(queryLimit));

export const createQueryByFilter = (collectionRef, sort) => {
	const [param1, param2] = sort.split('-');

	return query(
		collectionRef,
		orderBy(param1, param2),
		limit(PRODUCTS_PER_PAGE)
	);
};

export const createQueryPagination = (collectionRef, currPage) => {
	const start =
		currPage > 1 ? (currPage - 1) * PRODUCTS_PER_PAGE + 1 : currPage;
	const end = currPage * PRODUCTS_PER_PAGE;

	return query(collectionRef, orderBy('id'), startAt(start), endAt(end));
};
