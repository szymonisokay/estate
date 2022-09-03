export interface ApiEndpoint {
  path: string
}

export interface ApiEndpoints {
  getOffer: ApiEndpoint
  getOffers: ApiEndpoint
  updateOffer: ApiEndpoint
  uploadOfferImage: ApiEndpoint
}
