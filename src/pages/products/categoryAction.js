import { setCategories } from "./categorySlice";
import { getAllCategories } from "../../helpers/axiosHelpers";

export const fetchCategoriesAction = () => async (dispatch) => {
  // call axios for api call

  const allCategories = await getAllCategories();
  dispatch(setCategories(allCategories));
};
