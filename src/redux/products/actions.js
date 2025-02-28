import { toast } from "react-toastify";
import appAxios from "../../utils/appAxios";
import { ADDPRODUCT, GETPRODUCTS } from "./types";

export function getProductsAction(param) {
  return { type: GETPRODUCTS, payload: param };
}

export function fetchProducts() {
  return function (dispatch) {
    appAxios
      .get("/products")
      .then((res) => dispatch(getProductsAction(res.data)));
  };
}

export function addProductAction(param) {
  return { type: ADDPRODUCT, payload: param };
}

export function postProductAction(product) {
  return function (dispatch) {
    toast.promise(
      appAxios
        .post("/products", product)
        .then((res) => dispatch(addProductAction(res.data))),
      { pending: "loading", success: "success", error: "error" }
    );
  };
}
