import React from 'react';

// const App = (props) => {
//   return (
//     <>
//       <User name={'KKK'} age={10} />
//       <User name={'KK'} age={5} />
//     </>
//   )
// }

/**
 * Appコンポーネント
 * 上でコメントアウトしたコンポーネントのリファクタリング
 * @param {Object} props
 * @return {Array}
 */

const App = (props) => {

  const profiles = [{name:'KKK',age:42},{name:'KK',age:42},{name:'K'}];

  return (
    <>
      {profiles.map((cur,idx) => { return <User key={idx} name={cur.name} age={cur.age} /> })}
    </>
  )
}

/**
 * Userコンポーネント
 * Appコンポーネントの子供のコンポーネント
 * @param {Object} props
 * @return JSX
 */

const User = (props) => {
  return (
  <>
  <h4>{props.name}</h4>
  <h4>{props.age}</h4>
  </>
  )
}

User.defaultProps = {
  age: 1,
}

export default App;
