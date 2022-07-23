import axios from 'axios'

const API_URL = 'http://localhost:5000/api/offers'

const getOffers = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

export const OffersService = {
  getOffers,
}
