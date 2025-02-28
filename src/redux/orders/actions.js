import appAxios from "../../utils/appAxios";
import { GETORDERS } from "./types";

function getOrdersAction(param) {
  return { type: GETORDERS, payload: param };
}

export function fetchOrdersAction() {
  return function (dispatch) {
    appAxios.get("/orders").then((res) => dispatch(getOrdersAction(res.data)));
  };
}
