import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import ShopApp from "../reducers";



const store = createStore(ShopApp,applyMiddleware(thunk));
export default store