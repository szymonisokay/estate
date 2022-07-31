import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Settings } from './settings.model'
import { RootState } from '../../app/rootReducer'

const initialState: Settings = {
  filters: [
    { name: 'Min price', slug: 'min-price', value: 0 },
    { name: 'Max price', slug: 'max-price', value: 0 },
    { name: 'Min area', slug: 'min-area', value: 0 },
    { name: 'Max area', slug: 'max-area', value: 0 },
    { name: 'Min no. of rooms', slug: 'min-rooms', value: 0 },
    { name: 'Max no. of rooms', slug: 'max-rooms', value: 0 },
    { name: 'Location', slug: 'location', value: '' },
  ],
  sort: { name: 'Date: Newest', value: 'newest' },
  pagination: 12,
  layout: 'grid',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    addFilter: (
      state,
      action: PayloadAction<{ name: string; value: string | number }>
    ) => {
      state.filters = state.filters.map((filter) =>
        filter.slug === action.payload.name
          ? { ...filter, value: action.payload.value }
          : { ...filter }
      )
    },
    deleteFilter: (state, action: PayloadAction<{ name: string }>) => {
      state.filters = state.filters.map((filter) =>
        filter.name === action.payload.name
          ? filter.slug === 'location'
            ? { ...filter, value: '' }
            : { ...filter, value: 0 }
          : { ...filter }
      )
    },
    clearFilters: (state) => {
      state.filters.map((filter) =>
        filter.slug === 'location' ? (filter.value = '') : (filter.value = 0)
      )
    },
    changeLayout: (state) => {
      if (state.layout === 'grid') {
        state.layout = 'list'
      } else {
        state.layout = 'grid'
      }
    },
    changePagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload
    },
    changeSort: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.sort = action.payload
    },
  },
})

export const {
  addFilter,
  deleteFilter,
  clearFilters,
  changeLayout,
  changePagination,
  changeSort,
} = settingsSlice.actions

export const settingsSelector = (state: RootState) => state.settings
export default settingsSlice.reducer
