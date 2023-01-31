import View from './view';
import { formatStars } from '../utils/helpers';

class LastCommentsView extends View {
	_error = 'Comments is 404';

	_parent = document.querySelector('.comments__wrapper');

	loadHandler(handler) {
		if (!this._parent) return;

		handler();
	}

	_createLayout() {
		return this._data.map(
			(comment) =>
				`<div class="comment">
							<div class="comment__user">
								<img
									class="comment__user-img"
									src=${comment.authorPicture}
									alt="user image" />
								<h6 class="comment__user-name">${comment.authorName}</h6>
							</div>
							<div class="comment__review">
								<p class="comment__user-text">
									${comment.text}
								</p>
								<div class="comment__rating">
									${formatStars(comment.likes)}
								</div>
							</div>
						</div>`
		);
	}
}

export default LastCommentsView;
