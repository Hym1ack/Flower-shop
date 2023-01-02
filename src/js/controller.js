import * as model from "./model";
import bestProductsView from "./views/bestProductsView";

const bestSellersController = async () => {
  try {
    bestProductsView.showLoader();

    const products = await model.fetchProducts({
      fetchLimit: 4,
      fieldPath: "rating",
      opStr: ">=",
      value: 4.9,
    });

    bestProductsView.render(products);
  } catch (error) {
    bestProductsView.showError();
  }
};

const init = () => {
  bestProductsView.loadHandler(bestSellersController);
};

init();
