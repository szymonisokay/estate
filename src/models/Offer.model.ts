export type Offer = {
  _id: string
  title: string
  body_html: string
  area: number
  usable_area: number
  price: number
  price_m2: number
  is_for_rent?: boolean
  price_month?: number
  property_type?: string
  construction_year?: string
  rooms_num: number
  land_area?: string
  is_parking?: boolean
  parking_type?: string
  parking_num?: number
  images: {
    featured: string
    other?: string[]
  }
  available: string
  createdAt: Date | null
  updatedAt: Date | null
}
