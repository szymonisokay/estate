import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters, Settings } from './filters.model'
import { RootState } from '../../app/rootReducer'

const initialState: Settings = {
  filters: {
    priceFrom: '',
    priceTo: '',
    areaFrom: '',
    areaTo: '',
    roomsFrom: '',
    roomsTo: '',
    location: '',
    type: 'purchase',
  },
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (
      state: Settings,
      { payload }: PayloadAction<{ name: string; value: string }>
    ) => {
      if (payload.name === 'areaFrom' || payload.name === 'areaTo') {
        payload.value += ' m2'
        state.filters[payload.name as keyof Filters] = payload.value

        return
      }

      state.filters[payload.name as keyof Filters] = payload.value
    },
  },
})

export const { addFilter } = filtersSlice.actions

export const filtersSelector = (state: RootState) => state.filters
export default filtersSlice.reducer
