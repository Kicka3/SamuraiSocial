import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {MainStoreType, store} from "./redux/state";
import {App} from "./App";


export const RerenderEntireTree = (_state: MainStoreType) => {
    const state = store.getState();

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updatePostNewText={store.updatePostNewText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

RerenderEntireTree(store);

store.subscribe(RerenderEntireTree)
