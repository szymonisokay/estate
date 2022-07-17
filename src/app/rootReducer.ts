import { combineReducers } from '@reduxjs/toolkit'
import filtersReducer from '../features/filters/filtersSlice'

const rootReducer = combineReducers({
  filters: filtersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
