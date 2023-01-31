export const formatDate = (sec) => {
	const date = new Date(sec * 1000);
	const month =
		date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();

	return `${date.getFullYear()}/${month}/${day}`;
};

export const formatStars = (stars) => {
	const starActive = `<img
    class="comment__rating-star"
    src="https://firebasestorage.googleapis.com/v0/b/flowershop-88b42.appspot.com/o/svgs%2Fstar.svg?alt=media&token=d99360a6-90a0-4ecc-8533-3a46869f7582"
    alt="★"/>`;

	const starDisabled = `<img
    class="comment__rating-star"
    src="https://firebasestorage.googleapis.com/v0/b/flowershop-88b42.appspot.com/o/svgs%2Fstar-gray.svg?alt=media&token=be6e3a7a-a189-48f8-86b0-d225dd47fde7"
    alt="☆"/>`;

	let outStars = '';

	for (let i = 0; i < 5; i += 1) {
		if (i < stars) {
			outStars += starActive;
		} else {
			outStars += starDisabled;
		}
	}

	return outStars;
};

export const setURLParams = ({ name, value }) => {
	const href =
		window.location.origin + window.location.pathname + window.location.search;

	const url = new URL(href);

	if (url.searchParams.has(name)) {
		url.searchParams.set(name, value);
	} else {
		url.searchParams.append(name, value);
	}

	window.history.pushState({}, url.search, url.search);
};
