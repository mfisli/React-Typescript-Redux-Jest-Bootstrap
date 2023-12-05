import { combineReducers, configureStore } from '@reduxjs/toolkit'
import itemReducer from '../features/items/items.slice'

const appReducer = combineReducers({
    item: itemReducer,
})

const store = configureStore({
    reducer: appReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
