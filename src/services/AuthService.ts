import axios from 'axios'
import { transformData } from '../helpers/TransformData'
import {
  SignInFormDataModel,
  SignUpFormDataModel,
} from '../models/FormData.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const signUpUser = async (userData: SignUpFormDataModel) => {
  const endpoint = getEndpoint('register').path
  const response = await axios.post(endpoint, userData)

  return transformData(response.data)
}

const signInUser = async (userData: SignInFormDataModel) => {
  const endpoint = getEndpoint('login').path
  const response = await axios.post(endpoint, userData)

  return transformData(response.data)
}

export const AuthService = {
  signUpUser,
  signInUser,
}
