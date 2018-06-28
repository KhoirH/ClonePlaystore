import { combineReducers } from 'redux'

import nav from './nav'
import {accountReducer , itemReducer } from '../playstore/reducers'

const appReducer = combineReducers({
  nav,
  accountReducer,
  itemReducer
})

export default appReducer
