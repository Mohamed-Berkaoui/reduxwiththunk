import { ADDTOCART, CLEARCART, DECQUANTITY, INCQUANTITY, REMOVEFROMCART } from "./types";

export function AddToCartAction(param) {
  return {
    type: ADDTOCART,
    payload: param,
  };
}

export function incQuantityAction(param) {
  return {
    type: INCQUANTITY,
    payload: param,
  };
}

export function decQuantityAction(param) {
  return {
    type: DECQUANTITY,
    payload: param,
  };
}

export function removeFromCartAction(param) {
  return {
    type: REMOVEFROMCART,
    payload: param,
  };
}

export function clearCartAction() {
  return {
    type: CLEARCART,
  };
}
