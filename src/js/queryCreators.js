import { query, where, orderBy, limit, startAt, endAt } from 'firebase/firestore';

import { PRODUCTS_PER_PAGE } from './utils/constants';

export const createQueryWithRating = (collectionRef, queryLimit = 4) =>
	query(collectionRef, where('rating', '>=', 4.91), limit(queryLimit));

export const createQueryWithLimit = (
	collectionRef,
	queryLimit = PRODUCTS_PER_PAGE
) => query(collectionRef, limit(queryLimit));

export const createQueryByFilter = (collectionRef, sort) => {
	const [param1, param2] = sort.split('-');

	return query(collectionRef, orderBy(param1, param2), limit(PRODUCTS_PER_PAGE));
};

export const createQueryPagination = (collectionRef, { currPage, filterSort }) => {
	const param = filterSort === '' ? 'id' : filterSort.split('-');

	const start = currPage > 1 ? (currPage - 1) * PRODUCTS_PER_PAGE + 1 : currPage;
	const end = currPage * PRODUCTS_PER_PAGE;

	return query(
		collectionRef,
		orderBy(param, param !== 'id' ? param[1] : 'asc'),
		startAt(start),
		endAt(end)
	);
};
