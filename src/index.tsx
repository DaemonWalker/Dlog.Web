import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Article } from './pages/article';
import { ArticleTimeline } from './pages/articleTimeline';
import { Home } from './pages/home';
import { Tags } from './pages/tags';

document.title = "精灵の小小窝"
ReactDOM.render(
  <App >
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();