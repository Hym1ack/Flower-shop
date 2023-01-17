import PageView from './pageView';
import Sunflower from '../assets/img/home/sunflower.svg';
import { previewImagesLinks } from '../database';

class HomePageView extends PageView {
	_createLayout() {
		return `
		${this._createPreview()}
		${this._createBestSelers()}
		${this._createLatestPosts()}
		${this._createComments()}`;
	}

	_createPreview() {
		const previewImagesElements = previewImagesLinks.map(
			(imageUrl) => `
        <img
          class="preview__img"
          src=${imageUrl}
          alt="flower" />`
		);

		return `<section class="preview">
			<div class="preview__box">
				<h1 class="preview__title">
			    Flowers,<img src=${Sunflower} alt="sunflower" />
          what the world needs</h1>
				<p class="preview__descr">Browse between hounders of flowers</p>
				<a class="preview__link" href="#">Browse</a>
			</div>
			<div class="preview__images">
				${previewImagesElements.join('')}
			</div>
		</section>`;
	}

	_createBestSelers() {
		return `<section class="best-selers">
				<h3 class="title best-selers_heading">Best selers</h3>
				<div class="products__cards best-sellers_products"></div>
			</section>`;
	}

	_createLatestPosts() {
		return `<section class="latest-posts">
				<h3 class="title latest-posts_heading">Latest posts</h3>
				<div class="post-cards"></div>
			</section>`;
	}

	_createComments() {
		return `<section class="comments">
				<h3 class="title comments_heading">Comments</h3>
				<div class="comments__wrapper"></div>
			</section>`;
	}
}

export default new HomePageView();
