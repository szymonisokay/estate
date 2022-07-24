import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/rootReducer'
import { OffersService } from '../../services/offers/OffersService'
import { Settings } from '../settings/settings.model'
import { initialState, OffersSliceType, OffersType } from './offers.model'

// async

export const fetchOffers = createAsyncThunk<
  OffersType,
  undefined,
  {
    state: {
      settings: Settings
      offers: OffersSliceType
    }
  }
>('offers/fetchOffers', async (_, thunkAPI) => {
  try {
    return await OffersService.getOffers()
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
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
