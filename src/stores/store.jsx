import { createStore } from 'redux';
import Counter from '../reducers/count';

const store = createStore(Counter);

export default store;