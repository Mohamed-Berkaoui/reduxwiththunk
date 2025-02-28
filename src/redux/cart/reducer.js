import { toast } from "react-toastify";
import { ADDTOCART, CLEARCART, DECQUANTITY, INCQUANTITY, REMOVEFROMCART } from "./types";

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADDTOCART: {
        toast.success("added to cart")
      const existProd = state.find(
        (element) => element.product.id == action.payload.id
      );
      if (existProd) {


        return state.map((element) =>
          element.product.id == action.payload.id
            ? { ...element, qty: element.qty + 1 }
            : element
        );

      } else {
        return [...state, { product: action.payload, qty: 1 }];
      }
    }
    case INCQUANTITY:
      return state.map((element) =>
        element.product.id == action.payload.id
          ? { ...element, qty: element.qty + 1 }
          : element
      );

    case DECQUANTITY:
      return state.map((element) =>
        element.product.id == action.payload.id
          ? { ...element, qty: element.qty > 1 ? element.qty - 1 : element.qty }
          : element
      );
    case REMOVEFROMCART:
      return state.filter((element) => element.product.id != action.payload.id);
      case CLEARCART:
        return [];
    default:
      return state;
  }
}

export default cartReducer