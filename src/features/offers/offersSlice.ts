import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/rootReducer'
import { OffersService } from '../../services/offers/OffersService'
import { initialState } from './offers.model'

// async

export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
  const response = OffersService.getOffers()

  return response
})

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.offers = action.payload
    })
    builder.addCase(fetchOffers.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.errorMsg = payload as string
    })
  },
})

export const offersSelector = (state: RootState) => state.offers
export default offersSlice.reducer
