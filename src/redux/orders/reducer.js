import { GETORDERS } from "./types";

function ordersReducer(state=[],action){
    switch (action.type){
        case GETORDERS:return action.payload
        default :return state
    }
}
export default ordersReducer
