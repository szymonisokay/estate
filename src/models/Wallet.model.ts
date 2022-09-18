import { Offer } from './Offer.model'

export interface Wallet {
  _id: string
  user: string
  wallet_points: number
  transactions: Transaction[]
}

export interface Transaction {
  _id: string
  user: string
  offer: Offer
  status: 'New' | 'In Progess' | 'Paid' | 'Canceled'
  createdAt: Date
  updatedAt: Date
}
