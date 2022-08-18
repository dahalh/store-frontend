import { setProducts } from "./productSlice";
import { getAllProducts } from "../../helpers/axiosHelpers";

export const fetchProductsAction = () => async (dispatch) => {
  const allProducts = await getAllProducts();
  dispatch(setProducts(allProducts));
};
