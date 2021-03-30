import { combineReducers } from "redux";
import userReducer from "./user";
const rootReducer = combineReducers({ userReducer, sellerReducer });
export default rootReducer;
