import PageView from './pageView';
import filterImg from '../assets/img/filter.svg';
import arrowDown from '../assets/img/arrow-down.svg';
import inputSearch from '../assets/img/input-search.svg';

class ShopPageView extends PageView {
	_createLayout() {
		return ` 
 	      <div class="filter-block">
          ${this.#createFilterBlock()}
          ${this.#createSearchBlock()}
          ${this.#createSortBlock()}
        </div>     
        <div class="shop__cards"></div>
        <div class="pagination"></div>
        `;
	}

	#createFilterBlock() {
		return ` 
    <div class="filter">
      <button class="filter__btn">
        <img class="filter__img" src="${filterImg}" alt="filter" />
        <span class="filter__text">Filtering</span>
      </button>
      ${this.#createFilterMenu()}
    </div>
  `;
	}

	#createFilterMenu() {
		return `
    <div class="filter-menu">
      <button data-sort="title-asc"class="menu-item menu-item_selected">По алфавиту asc</button>
      <button data-sort="title-desc"class="menu-item">По алфавиту desc</button>
      <button data-sort="rating-asc"class="menu-item">По рейтингу asc</button>
      <button data-sort="rating-desc"class="menu-item">По рейтингу desc</button>
    </div>
    `;
	}

	#createSearchBlock() {
		return `
    <div class="search">
      <label>
        <input class="search__input" type="text" placeholder="Search...." />
      </label>
      <button class="search__mobile">
       <img src="${inputSearch}" alt="filter" />
      </button>
    </div>
    `;
	}

	#createSortBlock() {
		return `
    <div class="sort" data-price="">
      <button class="sort__btn" >
        <img class="sort__img" src="${arrowDown}" alt="arrow-down" />
        <span class="sort__text">Cheep</span>
      </button>
    </div>
    `;
	}
}

export default new ShopPageView();
