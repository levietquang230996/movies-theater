import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import { FilmProvider } from './store';
import './assets/styles/input.css';
import store from './redux/store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'sweetalert2/src/sweetalert2.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
