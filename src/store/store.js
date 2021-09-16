import { applyMiddleware, createStore } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
const middleware = [thunk]
const store = createStore(RootReducer,applyMiddleware(...middleware))


console.log(store.getState())

export default store