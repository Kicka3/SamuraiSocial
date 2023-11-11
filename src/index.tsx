import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './components/redux/state'
import {BrowserRouter} from "react-router-dom";

// <link href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@100;300;400;700;900&display=swap"
// rel = "stylesheet"/>

ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>,
    document.getElementById('root')
);