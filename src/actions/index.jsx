// 定数名は「UPPER_SNAKE_CASE」で命名する
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/**
 * アクションクリエーター
 * Reducer関数に渡すActionを返す関数
 * @return { Object } Action
*/

export const increment = () => {
  return (
    { type : INCREMENT }
  )
}

/**
 * アクションクリエーター
 * Reducer関数に渡すActionを返す関数
 * @return { Object } Action
*/

export const decrement = () => {
  return (
    { type: DECREMENT }
  )
}