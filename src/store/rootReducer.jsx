import { combineReducers } from 'redux'
import base from './base'
import auth from './auth'

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        base,
        auth,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
