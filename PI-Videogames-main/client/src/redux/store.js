import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
/* Esta linea nos sirve para conectarnos con la extencion del navegador => REDUX DEVTOOLS */

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
  /* Esta liena me sirve para poder hacer peticiones a la API */
);

export default store;
