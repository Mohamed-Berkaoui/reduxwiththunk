import { ADDPRODUCT, GETPRODUCTS } from "./types";

const initState = [];

function productsReducer(state = initState, action) {
  switch (action.type) {
    case GETPRODUCTS:
      return action.payload;
    case ADDPRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default productsReducer;
