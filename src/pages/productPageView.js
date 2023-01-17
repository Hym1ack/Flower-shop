import PageView from './pageView';

class ProductPageView extends PageView {
	_createLayout() {
		return `<div class="product">
          <div class="product__image-box">
            <img
              class="product__image"
              src="https://firebasestorage.googleapis.com/v0/b/flowershop-88b42.appspot.com/o/flowers%2Fflower-3.png?alt=media&token=081311c6-013e-4a81-bb12-af202a2f1605"
              alt="product image" />
          </div>
          <div class="product__content">
            <h4 class="product__title">Sun flower</h4>
            <p class="product__descr">
              Make every day brighter with our abundant bouquet of fresh sunflowers. These radiant,
              long-lasting blooms bring that just-picked-from-the-meadow feeling to birthdays, get
              well wishes, or any day you want to make someone you care about smile.
            </p>
            <div class="product__rate">
              <p class="product__rating">4.5/5</p>
              <p class="product__reviewers">(101 people opinion)</p>
            </div>

            <div class="product__bottom">
              <p class="product__price">100$ / each</p>
              <button class="product__favourite-btn">
                <svg
                  class="product__favourite-img"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 5.81046V5.58389C0 2.85342 1.97344 0.524518 4.66406 0.0760809C6.41016 -0.220403 8.25781 0.360065 9.53125 1.63546L10 2.10342L10.4336 1.63546C11.7422 0.360065 13.5547 -0.220403 15.3359 0.0760809C18.0273 0.524518 20 2.85342 20 5.58389V5.81046C20 7.43155 19.3281 8.98233 18.1406 10.0878L11.082 16.6776C10.7891 16.9511 10.4023 17.1034 10 17.1034C9.59766 17.1034 9.21094 16.9511 8.91797 16.6776L1.85898 10.0878C0.673047 8.98233 1.17188e-05 7.43155 1.17188e-05 5.81046H0Z"
                    fill="#FF8F52" />
                </svg>

                Add to favorite
              </button>
              <button class="product__cart-btn">
                <svg
                  class="product__cart-img"
                  width="20"
                  height="18"
                  viewBox="0 0 32 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.33333 0C5.97222 0 6.52222 0.463887 6.64444 1.10506L6.72778 1.8125H30.1C31.2278 1.8125 32.1278 2.95947 31.8111 4.11551L28.8111 14.9928C28.5944 15.7744 27.8944 16.3125 27.1 16.3125H9.48333L9.99444 19.0312H27.1111C27.85 19.0312 28.4444 19.6373 28.4444 20.3906C28.4444 21.1439 27.85 21.75 27.1111 21.75H8.83889C8.25 21.75 7.7 21.2855 7.57778 20.6455L4.23 2.71875H1.33333C0.597222 2.71875 0 2.10986 0 1.35938C0 0.608887 0.597222 0 1.33333 0H5.33333ZM7.11111 26.2812C7.11111 24.7803 8.30556 23.5625 9.77778 23.5625C11.25 23.5625 12.4444 24.7803 12.4444 26.2812C12.4444 27.7822 11.25 29 9.77778 29C8.30556 29 7.11111 27.7822 7.11111 26.2812ZM28.4444 26.2812C28.4444 27.7822 27.25 29 25.7778 29C24.3056 29 23.1111 27.7822 23.1111 26.2812C23.1111 24.7803 24.3056 23.5625 25.7778 23.5625C27.25 23.5625 28.4444 24.7803 28.4444 26.2812Z"
                    fill="#FFFFFF" />
                </svg>

                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="more">
          <div class="reviews">
            <div class="reviews__top">
              <h6 class="reviews__title">Reviews</h6>
              <button class="reviews__add-btn">Add a review</button>
            </div>
            <div class="review">
              <img class="review__author-img" src="https://firebasestorage.googleapis.com/v0/b/flowershop-88b42.appspot.com/o/users%2Fuser-2.png?alt=media&token=99cd7827-4507-44c7-972f-fd0594c5a190" alt="user" />
              <div class="review__box">
                <h5 class="review__author">Atena</h5>
                <p class="review__text">This flower is the best gift i've ever got</p>
                <div class="review__stars">
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                </div>
              </div>
            </div>
            <div class="review">
              <img class="review__author-img" src="https://firebasestorage.googleapis.com/v0/b/flowershop-88b42.appspot.com/o/users%2Fuser-2.png?alt=media&token=99cd7827-4507-44c7-972f-fd0594c5a190" alt="user" />
              <div class="review__box">
                <h5 class="review__author">Atena2</h5>
                <p class="review__text">This flower is the best gift i've ever got</p>
                <div class="review__stars">
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                </div>
              </div>
            </div>
            <div class="review">
              <img class="review__author-img" src="https://firebasestorage.googleapis.com/v0/b/flowershop-88b42.appspot.com/o/users%2Fuser-2.png?alt=media&token=99cd7827-4507-44c7-972f-fd0594c5a190" alt="user" />
              <div class="review__box">
                <h5 class="review__author">Atena</h5>
                <p class="review__text">This flower is the best gift i've ever got</p>
                <div class="review__stars">
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                  <img src="../assets/img/star.svg" alt="★" />
                </div>
              </div>
            </div>
          </div>
          <div class="recommendation">
            <h6 class="recommendation__title">Maybe you like...</h6>
            <div class="recommendation__box">
              <a href="#">
                <img
                  class="recommendation__img"
                  src="../assets/img/products/product-1.png"
                  alt="another product" />
              </a>
              <a href="#">
                <img
                  class="recommendation__img"
                  src="../assets/img/products/product-1.png"
                  alt="another product" />
              </a>
              <a href="#">
                <img
                  class="recommendation__img"
                  src="../assets/img/products/product-1.png"
                  alt="another product" />
              </a>
              <a href="#">
                <img
                  class="recommendation__img"
                  src="../assets/img/products/product-1.png"
                  alt="another product" />
              </a>
            </div>
          </div>
        </div>`;
	}
}

export default new ProductPageView();
