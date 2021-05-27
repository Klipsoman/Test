import { applyMiddleware, combineReducers, createStore } from "redux";

import { glassCondition } from "./glassConditionReducer";

let reducers = combineReducers({
    firstPage: glassCondition
})
let store = createStore(reducers)

export default store 
window.store = store







