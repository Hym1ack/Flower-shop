import { query, where, limit, getDocs, collection } from "firebase/firestore";
import { database } from "../firebase";

export const state = {};

export const fetchProducts = async ({
  fetchLimit = 20,
  fieldPath,
  opStr,
  value,
} = {}) => {
  const isParams = fieldPath && opStr && value;

  const productsRef = collection(database, "products");
  const productsQuery = query(
    productsRef,
    isParams && where(fieldPath, opStr, value),
    limit(fetchLimit)
  );
  const querySnapshot = await getDocs(productsQuery);

  const arrProducts = [];

  querySnapshot.forEach((doc) => {
    arrProducts.push(doc.data());
  });

  return arrProducts;
};

// dev
window.state = state;
