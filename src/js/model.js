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

export const state = {};

export const fetchItems = async ({
	fetchLimit = 20,
	fieldPath,
	opStr,
	value,
	collectionType,
	fieldSort,
	directionStr,
} = {}) => {
	const isWhere = !!(fieldPath && opStr && value);
	const isOrderBy = !!(fieldSort && directionStr);

	const collectionRef = collection(database, collectionType);

	const queryParams = () => {
		if (isWhere) return `where(${fieldPath}, ${opStr}, ${value})`;

		if (isOrderBy) return `orderBy(${fieldSort}, ${directionStr})`;

		if (isOrderBy && isWhere)
			return `where(${fieldPath}, ${opStr}, ${value})
      orderBy(${fieldSort}, ${directionStr})`;

		return false;
	};

	const collectionQuery = query(
		collectionRef,
		queryParams(),
		limit(fetchLimit)
	);

	const querySnapshot = await getDocs(collectionQuery);

	const arrItems = [];

	querySnapshot.forEach((doc) => {
		arrItems.push(doc.data());
	});

	return arrItems;
};

// dev
window.state = state;
