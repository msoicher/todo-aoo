import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import { todosReducer } from "./reducers/todosReducer";
import { Provider } from "react-redux";

let store = createStore(todosReducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
