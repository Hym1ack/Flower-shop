import loader from "../../../assets/img/loader.svg";

class View {
  _data;

  render(data) {
    if (!data) return;

    this._data = data;
    const markup = this._createLayout();

    this._clearLayout();
    this._parent.insertAdjacentHTML("beforeend", markup.join(""));
  }

  update(data) {
    this._data = data;

    const newMarkup = this._createLayout();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parent.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
    });
  }

  showLoader(isLoading) {
    if (isLoading) {
      this._parent.innerHTML = `<img class="loader" src=${loader} alt="loading..." />`;
    }
  }

  showError() {
    this._parent.innerHTML = `<p class="error">${this._error}</p>`;
  }

  _clearLayout() {
    this._parent.innerHTML = "";
  }
}

export default View;
