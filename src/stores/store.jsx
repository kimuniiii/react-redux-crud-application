// 外部ライブラリからimport
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// 画面固有のimport
import eventsReducer from '../reducers/events-reducer'

const store = createStore(eventsReducer, applyMiddleware(thunk));

export default store;