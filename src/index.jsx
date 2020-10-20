// 外部ライブラリからのimport
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

// 共通実装のimport
import store from './stores/store';

// 画面固有のimport
import EventsIndex from './components/EventsIndex';
import EventsNew from './components/EventsNew';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={EventsIndex} />
      <Route exact path="/events/new" component={EventsNew} />
    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);