import axios from 'axios'
import { OfferType } from '../models/Offer.model'
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

export const OffersService = {
  getOffers,
  getOffer,
}
