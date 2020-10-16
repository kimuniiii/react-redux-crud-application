// 外部ライブラリからのimport
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../stores/store';

// 画面固有のimport
import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    const props = this.props;

    store.subscribe(() => {
      console.log(store.getState());
    })

    return (
      <>
        <div>count:{props.count}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
}

const mapStateToProps = (state) => { return { count : state.count } }

const mapDispatchToProps = (dispatch) => {
  return {
  increment: () => { dispatch(increment()) },
  decrement: () => { dispatch(decrement()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);