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
  uploadOfferImage: ApiEndpoint

  bookmark: ApiEndpoint
  removeBookmark: ApiEndpoint
  populatedBookmarks: ApiEndpoint

  getUser: ApiEndpoint
  updateUser: ApiEndpoint
  changePassword: ApiEndpoint

  wallet: ApiEndpoint
}
