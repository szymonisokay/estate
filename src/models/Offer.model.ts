export type Offer = {
  _id: string
  title: string
  body_html: string
  area: number
  usable_area: number
  price: number
  price_m2: number
  is_for_purchase: boolean
  is_for_rent: boolean
  price_month: number
  property_type?: string
  construction_year?: string
  rooms_num: number
  land_area?: string
  facilities: Facility[]
  parking: {
    is_parking?: boolean
    parking_type?: string
    parking_num?: number
  }
  images: {
    featured: string
    other?: string[]
  }
  available: string
  location: {
    country: string
    city: string
    street: string
    zip_code: string
    coords: {
      lat: number
      lng: number
    }
  }
  surroundings: string
  nearby: string
  user: User
  createdAt: Date | null
  updatedAt: Date | null
}

type Facility = {
  name: string
  amount: number
}

type User = {
  _id: string
  username: string
  email: string
  image: string
}
