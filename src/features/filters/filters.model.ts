export type Settings = {
  filters: Filters
}

export type Filters = {
  priceFrom?: string
  priceTo?: string
  areaFrom?: string
  areaTo?: string
  roomsFrom?: string
  roomsTo?: string
  location?: string
  type: string
}
