// 画面固有のimport
import { INCREMENT, DECREMENT } from '../actions';

const initialState = { count : 0 };

/**
 * Counter
 * 古いstateとactionを受け取ってnew stateを返すReducer関数
 * @param {Object} state
 * @param {Object} action
 * @return new State
 */

const Counter = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {count : state.count + 1};
    case DECREMENT:
      return {count: state.count - 1};
    default:
      console.log(state);
      return state;
  }
}

export default Counter;