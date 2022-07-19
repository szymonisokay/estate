export type Settings = {
  filters: Filters[]
}

export type Filters = { name: string; slug: string; value: string | number }
