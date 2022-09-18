import axios from 'axios'
import { Wallet } from '../models/Wallet.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const createTransaction = async (offerId: string, token: string) => {
  const endpoint = getEndpoint('createTransaction').path

  const response = await axios.post(
    endpoint,
    { offer: offerId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data as { msg: string; wallet: Wallet }
}

export const TransactionService = {
  createTransaction,
}
