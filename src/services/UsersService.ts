import axios from 'axios'
import { ChangePassword } from '../models/FormData.model'
import { User } from '../models/Offer.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const getUser = async (id: string, token: string) => {
  const endpoint = getEndpoint('getUser').path.replace('{id}', id)

  const response = await axios.get<User>(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const updateUser = async (user: User, token: string) => {
  const endpoint = getEndpoint('updateUser').path.replace('{id}', user._id)
  const response = await axios.put(endpoint, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as { msg: string; user: User }
}

const changePassword = async (
  id: string,
  passwords: ChangePassword,
  token: string
) => {
  const endpoint = getEndpoint('changePassword').path.replace('{id}', id)
  const response = await axios.put(endpoint, passwords, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data as { msg: string; user: User }
}
export const UsersService = {
  getUser,
  updateUser,
  changePassword,
}
