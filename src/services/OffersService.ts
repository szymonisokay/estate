import axios from 'axios'
import { Offer, OfferType } from '../models/Offer.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const getOffers = async (
  type: 'purchase' | 'rent',
  location: string,
  minPrice: number,
  maxPrice: number,
  minArea: number,
  maxArea: number,
  sort: string
) => {
  const endpoint = getEndpoint('getOffers').path
  const response = await axios.get<OfferType>(endpoint, {
    params: {
      type,
      location,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      sort,
    },
  })

  return response.data
}

const getOffer = async (id: string) => {
  const endpoint = getEndpoint('getOffer').path.replace('{param}', id)
  const response = await axios.get<OfferType>(endpoint)

  return response.data
}

const createOffer = async (offer: Offer, token: string) => {
  const endpoint = getEndpoint('getOffers').path
  const response = await axios.post(endpoint, offer, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as { msg: string; offer: Offer }
}

const getUserOffers = async (id: string, token: string) => {
  const endpoint = getEndpoint('getUserOffers').path.replace('{id}', id)
  const response = await axios.get<OfferType>(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const updateOffer = async (id: string, offer: Offer, token: string) => {
  const endpoint = getEndpoint('updateOffer').path.replace('{param}', id)

  const response = await axios.put(endpoint, offer, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as { msg: string; offer: Offer }
}

const uploadImage = async (formData: FormData, token: string) => {
  const endpoint = getEndpoint('uploadOfferImage').path

  const response = await axios.post(endpoint, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data as { msg: string; file: any; is_featured: boolean }
}

export const OffersService = {
  getOffer,
  getOffers,
  getUserOffers,
  createOffer,
  updateOffer,
  uploadImage,
}
