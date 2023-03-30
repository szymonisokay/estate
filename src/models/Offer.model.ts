export interface OfferType {
	results: Offer | Offer[]
	total: number
}

export interface Offer {
	_id?: string
	title: string
	description: string
	area: number
	land_area: number
	price: number
	is_for_rent: boolean
	price_month: number
	property_type: string
	construction_year: string
	facilities: string[]
	is_parking: boolean
	parking: {
		parking_type: string
		parking_num: number
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
	user: OfferUser
	createdAt: Date | null
	updatedAt: Date | null
}

export interface OfferUser {
	_id: string
	username: string
	email: string
	image: string
}
export interface User {
	id: string
	username: string
	email: string
	image?: string
	role?: string
}

export interface UserWithOffers extends User {
	offers: Offer[]
}
