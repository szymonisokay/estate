import { environment } from '../environment/environment'
import { ApiEndpoint, ApiEndpoints } from './api-endpoints.model'

export const getEndpoint = (endpoint: keyof ApiEndpoints): ApiEndpoint => {
  return { path: `${environment.baseApiUrl}${apiEndpoints[endpoint].path}` }
}

export const apiEndpoints: ApiEndpoints = {
  getOffer: { path: 'offers/{param}' },
  getOffers: { path: 'offers/' },
}
