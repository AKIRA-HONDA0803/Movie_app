import React, { createContext, useReducer } from 'react'

const initialState = {
  popular: [],
  related: [],
  selected: {}
}
// initialStateの中に複数のStateが含まれる場合は、必ずスプレッド構文を使って...stateを追加してから更新を行う

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_POPULAR':
      return {...state, popular: action.payload.popular }
    case 'SET_RELATED':
      return {...state, related: action.payload.related }
    case 'SET_SELECTED':
      return {...state, selected: action.payload.selected }
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

export const StoreProvider = ({children}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}

export default StoreProvider
