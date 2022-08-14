export type Settings = {
  filters: Filters[]
  sort: { name: string; value: string }
  pagination: { limit: number; page: number }
  layout: string
}

export type Filters = { name: string; slug: string; value: string | number }
