/* global XMLHttpRequest */
import { applyMiddleware, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import history from "./history.js";
import reducer from "./reducers/";

const fetch = ({ url, method, body, headers }) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status !== 200) {
          console.log({ request });
          reject(request);
        } else {
          resolve(request.responseText);
        }
      }
    };
    request.open(method, url);
    Object.keys(headers).forEach(headerKey => {
      request.setRequestHeader(headerKey, headers[headerKey]);
    });
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.send(body);
  });
};
const store = createStore(
  reducer,
  applyMiddleware(
    thunk.withExtraArgument(fetch),
    createLogger({ stateTransformer: state => state.report.toJS() }),
    routerMiddleware(history)
  )
);

export default store;
