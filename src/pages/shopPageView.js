import PageView from './pageView';

class ShopPageView extends PageView {
	_createLayout() {
		return ` 
 	<div class="filter-block">
          <div class="filter">
            <button class="filter__btn">
              <img class="filter__img" src="../assets/img/filter.svg" alt="filter" />
              <span class="filter__text">Filtering</span>
            </button>
          </div>

          <div class="search">
            <label>
              <input class="search__input" type="text" placeholder="Search...." />
            </label>
            <button class="search__mobile">
              <img src="../assets/img/input-search.svg" alt="filter" />
            </button>
          </div>

          <div class="sort">
            <button class="sort__btn">
              <img class="sort__img" src="../assets/img/arrow-down.svg" alt="arrow-down" />
              <span class="sort__text">Cheep</span>
            </button>
          </div>
          
        </div>     
  <div class="products__cards">
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-1.svg"
                alt="flower-1"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Daisy</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-2.svg"
                alt="flower-2"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Sun flower</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-3.svg"
                alt="flower-3"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">White Rose</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-4.svg"
                alt="flower-4"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Periwinkle</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-1.svg"
                alt="flower-1"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Daisy</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-2.svg"
                alt="flower-2"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Sun flower</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-3.svg"
                alt="flower-3"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">White Rose</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-4.svg"
                alt="flower-4"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Periwinkle</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-1.svg"
                alt="flower-1"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Daisy</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-2.svg"
                alt="flower-2"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Sun flower</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-3.svg"
                alt="flower-3"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">White Rose</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
          <div class="product__card">
            <a href="#" class="product__card-link">
              <img
                src="../assets/img/flowers/flower-4.svg"
                alt="flower-4"
                class="product__card-img" />
            </a>
            <h5 class="product__card-title">Periwinkle</h5>
            <div class="product__card-shop">
              <div class="product__card-price">5$</div>
              <button class="product__card-add">Add to cart</button>
            </div>
          </div>
        </div>`;
	}
}

export default new ShopPageView();
