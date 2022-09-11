import { environment } from '../environment/environment'
import { ApiEndpoint, ApiEndpoints } from './api-endpoints.model'

export const getEndpoint = (endpoint: keyof ApiEndpoints): ApiEndpoint => {
  return { path: `${environment.baseApiUrl}${apiEndpoints[endpoint].path}` }
}

export const apiEndpoints: ApiEndpoints = {
  login: { path: 'auth/login' },
  register: { path: 'auth/register' },

  getOffer: { path: 'offers/{id}' },
  getOffers: { path: 'offers' },
  getUserOffers: { path: 'offers/user/{id}' },
  updateOffer: { path: 'offers/{id}' },
  deleteOffer: { path: 'offers/{id}' },
  uploadOfferImage: { path: 'offers/upload/' },

  bookmark: { path: 'bookmarks/' },
  removeBookmark: { path: 'bookmarks/{id}' },
  populatedBookmarks: { path: 'bookmarks/populated' },

  getUser: { path: 'users/{id}' },
  updateUser: { path: 'users/{id}' },
  changePassword: { path: 'users/changePassword/{id}' },

  wallet: { path: 'wallet/' },
}
