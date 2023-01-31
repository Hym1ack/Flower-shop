import View from './view';
import { formatDate } from '../utils/helpers';

class PostsView extends View {
	_error = 'Posts is 404';

	_parent = document.querySelector('.post-cards');

	loadHandler(handler) {
		if (!this._parent) return;

		handler();
	}

	_createLayout() {
		return this._data.map(
			(post) => `
        <div class="post-card">
        <div class="post-card__top">
          <figure class="post-card__author">
            <img
              class="post-card__author-picture"
              src="${post.authorPicture}"
              alt="user picture" />
            <figcaption class="post-card__author-name">${
							post.authorName
						}</figcaption>
          </figure>
          <time class="post-card__date">${formatDate(post.date.seconds)}</time>
        </div>

        <a class="post-card__img-box" href="#">
          <img
            class="post-card__img"
            src="${post.photo}"
            alt="post picture" />
        </a>
        <div class="post-card__content">
          <h5 class="post-card__headline">${post.title}</h5>
          <p class="post-card__text">
            ${post.text}
          </p>
        </div>
        <div class="post-card__info">
          <div class="post-card__counters">
            <p class="post-card__likes">${post.likes}</p>
            <p class="post-card__viewed">${post.viewed}</p>
          </div>
          <a class="post-card__link" href="#">Read more</a>
        </div>
      </div>
        `
		);
	}
}

export default PostsView;
