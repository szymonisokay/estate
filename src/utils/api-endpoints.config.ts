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
	getOffersAdmin: { path: 'offers/admin' },

	bookmark: { path: 'bookmarks/' },
	removeBookmark: { path: 'bookmarks/{id}' },
	populatedBookmarks: { path: 'bookmarks/populated' },

	getUsers: { path: 'users/' },
	getUser: { path: 'users/{id}' },
	getUserWithOffers: { path: 'users/userWithOffers/{id}' },
	updateUser: { path: 'users/{id}' },
	deleteUser: { path: 'users/{id}' },
	changePassword: { path: 'users/changePassword/{id}' },
	uploadAvatar: { path: 'users/upload' },

	wallet: { path: 'wallet/' },

	createTransaction: { path: 'transactions/' },
}
