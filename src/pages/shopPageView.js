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
        <div class="products__cards"></div>`;
	}
}

export default new ShopPageView();
