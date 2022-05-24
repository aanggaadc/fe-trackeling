import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
