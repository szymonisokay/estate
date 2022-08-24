import { Offer } from '../../models/Offer.model'

export type OffersSliceType = {
  offers: OffersType
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMsg: string
}

export type OffersType = {
  results: Offer | Offer[] | null
  total: number
}

export const initialState: OffersSliceType = {
  offers: {
    results: null,
    total: 0,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMsg: '',
}
