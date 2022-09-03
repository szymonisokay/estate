import axios from 'axios'
import { Offer, OfferType } from '../models/Offer.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const getOffers = async () => {
  const endpoint = getEndpoint('getOffers').path
  const response = await axios.get<OfferType>(endpoint)

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
  getOffers,
  getOffer,
  createOffer,
  updateOffer,
  uploadImage,
}
