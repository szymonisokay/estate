import { Offer } from '../../models/Offer.model'

export type OffersSliceType = {
  offers: OffersType
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMsg: string
}

export type OffersType = {
  results: Offer | Offer[]
  total: number
}

export const initialState: OffersSliceType = {
  offers: {
    results: {
      _id: '',
      title: '',
      body_html: '',
      area: 0,
      usable_area: 0,
      price: 0,
      price_m2: 0,
      is_for_rent: false,
      price_month: 0,
      property_type: '',
      construction_year: '',
      rooms_num: 0,
      land_area: '',
      is_parking: false,
      parking_type: '',
      parking_num: 0,
      images: {
        featured: '',
        other: [],
      },
      available: '',
      location: {
        country: '',
        city: '',
        street: '',
        zip_code: '',
      },
      createdAt: null,
      updatedAt: null,
    },
    total: 0,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMsg: '',
}
