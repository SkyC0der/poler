// const configureStore = require('@reduxjs/toolkit').configureStore
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/states/statesReducer'
// const reduxLogger = require('redux-logger')
// const cakeReducer = require('../features/cake/cakeSlice')
// const icecreamReducer = require('../features/icecream/icecreamSlice')
// const userReducer = require('../features/user/userSlice')
// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    user: userReducer
  }
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store