import './index.css';
import state, {addPost, RootStateType, subscribe, updatePostNewText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


// <link href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@100;300;400;700;900&display=swap"
// rel = "stylesheet"/>


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updatePostNewText={updatePostNewText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)
