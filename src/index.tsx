import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {RootStateType, store} from "./redux/state";
import {App} from "./App";


export const RerenderEntireTree = (_state: RootStateType) => {
    const state = store.getState();

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

RerenderEntireTree(store.getState());

store.subscribe(RerenderEntireTree)
