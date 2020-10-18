// 外部ライブラリからのimport
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// 共通実装のimport
import store from './stores/store';

// 画面固有のimport
import EventsIndex from './components/EventsIndex';

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);