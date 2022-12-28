import { combineReducers } from "redux";
import { estadosReducer, municipiosReducer, municipioReducer } from "./productReducer";

const reducers = combineReducers({
    estadosReducer, municipiosReducer, municipioReducer
})

export default reducers