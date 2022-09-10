export interface Filters {
  type: 'purchase' | 'rent'
  location: string
  minPrice: number
  maxPrice: number
  minArea: number
  maxArea: number
}

export const initialFilters: Filters = {
  type: 'purchase',
  location: '',
  minPrice: 0,
  maxPrice: 0,
  minArea: 0,
  maxArea: 0,
}

export interface Sort {
  value: string
  label: string
}

export const sortOptions: Sort[] = [
  { value: 'newest', label: 'Newest offers' },
  { value: 'price_asc', label: 'Price: Low - High' },
  { value: 'price_desc', label: 'Price: High - Low' },
]
