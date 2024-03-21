import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
    // </BrowserRouter>, document.getElementById('root')
);

