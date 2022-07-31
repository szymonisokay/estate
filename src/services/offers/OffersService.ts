import axios from 'axios'
import { Settings } from '../../features/settings/settings.model'

const API_URL = 'http://localhost:5000/api/offers'

const getOffers = async (params: Settings) => {
  console.log(params)
  const response = await axios.get(API_URL, {
    params: {
      sort: params.sort.value,
      limit: params.pagination,
      filters: params.filters.map((filter) =>
        !!filter.value ? { ...filter } : null
      ),
    },
  })

  return response.data
}

export const OffersService = {
  getOffers,
}
