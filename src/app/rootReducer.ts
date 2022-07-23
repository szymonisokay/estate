import { combineReducers } from '@reduxjs/toolkit'
import settingsReducer from '../features/settings/settingsSlice'
import offersReducer from '../features/offers/offersSlice'

const rootReducer = combineReducers({
  settings: settingsReducer,
  offers: offersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
