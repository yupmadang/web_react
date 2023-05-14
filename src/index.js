import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./login.js";
import Store_redux from "./store_redux";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(Store_redux, composeWithDevTools());
const head = ReactDOM.createRoot(document.getElementById('head'));

head.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<App/>}/>
          <Route  path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
    
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
