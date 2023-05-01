import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';/*난 버튼 눌러서 페이지 이동할거니까 Link 쓸거닿ㅎㅎㅎㅎㅎ*/


const head = ReactDOM.createRoot(document.getElementById('head'));
head.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
