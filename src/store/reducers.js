import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
// import user from 'reducers/user'
// import common from 'reducers/common'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    // user,
    // common,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
