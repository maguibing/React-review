import { combineReducers } from 'redux'
import { todos } from './todo'
import { filter } from './filter'

/**
 * 合并reducer
 */
export default combineReducers({
  todos,
  filter
})
