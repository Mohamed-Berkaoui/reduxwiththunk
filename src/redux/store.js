import { createStore,applyMiddleware,combineReducers } from "redux";
import productsReducer from "./products/reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import cartReducer from "./cart/reducer";
import ordersReducer from "./orders/reducer";

const reducer=combineReducers({
    products:productsReducer,
    cart:cartReducer,
    orders:ordersReducer
})

const store=createStore(reducer,applyMiddleware(thunk,logger))


export default store