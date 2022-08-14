import axios from 'axios'
import { Settings } from '../../features/settings/settings.model'
import { environment } from '../../environment/environment'

const API_URL = environment.baseApiUrl + 'offers/'

const getOffers = async (params: Settings) => {
  const response = await axios.get(API_URL, {
    params: {
      sort: params.sort.value,
      limit: params.pagination.limit,
      page: params.pagination.page,
      filters: params.filters.filter((filter) => !!filter.value),
    },
  })

  return response.data
}

const getSingleOffer = async (id: string) => {
  const response = await axios.get(API_URL + id)

  return response.data
}

export const OffersService = {
  getOffers,
  getSingleOffer,
}
