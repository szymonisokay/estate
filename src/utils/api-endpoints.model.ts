export interface ApiEndpoint {
	path: string
}

export interface ApiEndpoints {
	login: ApiEndpoint
	register: ApiEndpoint

	getOffer: ApiEndpoint
	getOffers: ApiEndpoint
	getUserOffers: ApiEndpoint
	updateOffer: ApiEndpoint
	deleteOffer: ApiEndpoint
	uploadOfferImage: ApiEndpoint
	getOffersAdmin: ApiEndpoint

	bookmark: ApiEndpoint
	removeBookmark: ApiEndpoint
	populatedBookmarks: ApiEndpoint

	getUsers: ApiEndpoint
	getUser: ApiEndpoint
	getUserWithOffers: ApiEndpoint
	updateUser: ApiEndpoint
	deleteUser: ApiEndpoint
	changePassword: ApiEndpoint
	uploadAvatar: ApiEndpoint

	wallet: ApiEndpoint

	createTransaction: ApiEndpoint
}
