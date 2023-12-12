import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {App} from "./App";
import {RootReduxStoreType, store} from "./redux/redux-store";
import {Provider} from "react-redux";



export const RerenderEntireTree = (_state: RootReduxStoreType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // dispatch={store.dispatch.bind(store)}  //Передаёт все это через контекст
                    // store={store}
                />
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    );
}

RerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    RerenderEntireTree(state);
});
