import React,{ Component } from 'react';

/**
 * Appコンポーネント
 * Counterコンポーネントを返すシンプルなコンポーネント
 */

const App = () => {

  return (
    <>
      <Counter />
    </>
  )
}

/**
 * Counterコンポーネント
 * Appコンポーネントの子供のコンポーネント
 */

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    }

  handleIncrement = () => {
    this.setState((state) => { return { count : state.count + 1 }})
  }

  handleDecrement = () => {
    this.setState((state) => { return { count : state.count - 1 }})
  }

  render() {
    return (
      <>
      <p>count: {this.state.count}</p>
      <button onClick={this.handleIncrement}>+1</button>
      <button onClick={this.handleDecrement}>-1</button>
      </>
    )
  }
}

export default App;
