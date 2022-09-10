import axios from 'axios'
import { Wallet } from '../models/Wallet.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const getWalletInfo = async (token: string) => {
  const endpoint = getEndpoint('wallet').path
  const response = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as Wallet
}

const addCredits = async (coupon: string, token: string) => {
  const endpoint = getEndpoint('wallet').path

  const response = await axios.put(endpoint, coupon, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as Wallet
}

export const WalletService = {
  getWalletInfo,
  addCredits,
}
