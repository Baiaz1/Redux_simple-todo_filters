import { combineReducers } from 'redux'

import { todos } from './todos-reducers'

export const rootReducer = combineReducers({
    todos,
})