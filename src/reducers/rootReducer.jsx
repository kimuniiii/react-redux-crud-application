// 外部ライブラリからのimport
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// 画面固有のimport
import eventsReducer from '../reducers/events-reducer'

const reducer = combineReducers({ eventsReducer, form: formReducer });

export default reducer;