import React from 'react'
import { Offer, User } from '../../../models/Offer.model'

export interface StepsComponentInterface {
  offer: Offer
  updateOffer: React.Dispatch<React.SetStateAction<Offer>>
}

export const formatter = (value: any) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const parser = (value: any) => +value!.replace(/\$\s?|(,*)/g, '')

export const propertyType: Select[] = [
  {
    value: 'terraced house',
    label: 'Terraced house',
  },
  {
    value: 'detached house',
    label: 'Detached house',
  },
  {
    value: 'semi-detached house',
    label: 'Semi-detached house',
  },
  {
    value: 'residence',
    label: 'Residence',
  },
  {
    value: 'manor house',
    label: 'Manor house',
  },
  {
    value: 'palace',
    label: 'Palace',
  },
  {
    value: 'summer house',
    label: 'Summer house',
  },
  {
    value: 'farm',
    label: 'Farm',
  },
]

export const parkingType: Select[] = [
  { value: 'garage in the building', label: 'Garage in the building' },
  { value: 'detached garage', label: 'Detached garage' },
  { value: 'garage carport', label: 'Garage carport' },
  { value: 'in the driveway', label: 'In the driveway' },
]

export const facilitiesType: Select[] = [
  { value: 'Furnished', label: 'Furnished' },
  { value: 'Balcony', label: 'Balcony' },
  { value: 'Household appliances', label: 'Household appliances' },
  { value: 'Separate toilet', label: 'Separate toilet' },
  { value: 'Basement', label: 'Basement' },
  { value: 'Attic', label: 'Attic' },
  {
    value: 'Adapted for disabled people',
    label: 'Adapted for disabled people',
  },
  { value: 'Air conditioning', label: 'Air conditioning' },
  { value: 'Electricity', label: 'Electricity' },
  { value: 'Gas', label: 'Gas' },
  { value: 'Internet', label: 'Internet' },
  { value: 'Cable TV', label: 'Cable TV' },
  { value: 'Telephone', label: 'Telephone' },
  { value: 'Measurement of heat', label: 'Measurement of heat' },
  { value: 'Energetic audit', label: 'Energetic audit' },
  { value: 'Fence', label: 'Fence' },
]

interface Select {
  value: string | number
  label: string | number
}

const user: User = {
  _id: '',
  username: '',
  email: '',
  image: '',
}

export const initialOffer = {
  title: '',
  description: '',
  area: 0,
  land_area: 0,
  price: 0,
  is_for_rent: false,
  price_month: 0,
  property_type: '',
  construction_year: '',
  facilities: [],
  is_parking: false,
  parking: {
    parking_type: '',
    parking_num: 1,
  },
  images: {
    featured: '',
    other: [],
  },
  available: '',
  location: {
    country: '',
    city: '',
    street: '',
    zip_code: '',
    coords: {
      lat: 0,
      lng: 0,
    },
  },
  surroundings: '',
  nearby: '',
  user: user,
  createdAt: null,
  updatedAt: null,
}
