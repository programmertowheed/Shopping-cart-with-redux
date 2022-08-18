import { applyMiddleware, createStore } from "redux";
import productStock from "./middlewares/productStock";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(productStock));

export default store;
