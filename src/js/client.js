import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducer from "./reducers";
import App from "./components/App";

var store = createStore(allReducer);

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
	<App/>
	</Provider>,app);

