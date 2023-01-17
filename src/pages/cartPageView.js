import PageView from './pageView';

class CartPageView extends PageView {
	_createLayout() {
		return ` <div class="cart__inner">
          <div class="cart">
            <h3 class="cart__title">Your Cart</h3>
            <div class="list">
              <div class="item">
                <img src="../assets/img/flowers/flower-1.svg" alt="img" class="item__img" />
                <div class="item__info">
                  <h3 class="item__title">Sun flower</h3>
                  <h4 class="item__descr">sun lover flower</h4>
                  <p class="item__price">unit pric 10$</p>
                  <div class="item__count-box">
                    <button class="item__minus">
                      <img src="../assets/img/minus.svg" alt="minus" />
                    </button>
                    <p class="item__count">1</p>
                    <button class="item__plus">
                      <img src="../assets/img/plus.svg" alt="plus" />
                    </button>
                  </div>
                  <button class="item__remove">
                    <img src="../assets/img/remove.svg" alt="remove" class="item__remove-img" />
                  </button>
                  <p class="item__total-price">Total 10$</p>
                </div>
              </div>
              <div class="item">
                <img src="../assets/img/flowers/flower-1.svg" alt="img" class="item__img" />
                <div class="item__info">
                  <h3 class="item__title">White Rose</h3>
                  <h4 class="item__descr">sun lover flower</h4>
                  <p class="item__price">unit pric 10$</p>
                  <div class="item__count-box">
                    <button class="item__minus">
                      <img src="../assets/img/minus.svg" alt="minus" />
                    </button>
                    <p class="item__count">1</p>
                    <button class="item__plus">
                      <img src="../assets/img/plus.svg" alt="plus" />
                    </button>
                  </div>
                  <button class="item__remove">
                    <img src="../assets/img/remove.svg" alt="remove" class="item__remove-img" />
                  </button>
                  <p class="item__total-price">Total 10$</p>
                </div>
              </div>
            </div>
          </div>
          <div class="total">
            <h3 class="total__title">Subtotal for 3 items: <b class="total__price">62$</b></h3>
            <button class="total__btn">Checkout</button>
          </div>
        </div>`;
	}
}

export default new CartPageView();
