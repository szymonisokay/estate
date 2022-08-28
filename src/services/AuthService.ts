import axios from 'axios'
import { transformData } from '../helpers/TransformData'
import {
  SignInFormDataModel,
  SignUpFormDataModel,
} from '../models/FormData.model'

const API_URL = 'http://localhost:5000/api/auth'

const signUpUser = async (userData: SignUpFormDataModel) => {
  const response = await axios.post(`${API_URL}/register`, userData)

  return transformData(response.data)
}

const signInUser = async (userData: SignInFormDataModel) => {
  const response = await axios.post(`${API_URL}/login`, userData)

  return transformData(response.data)
}

export const AuthService = {
  signUpUser,
  signInUser,
}
