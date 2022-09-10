import {
  SignInFormDataModel,
  SignUpFormDataModel,
} from '../../models/FormData.model'
import { User as UserModel } from '../../models/Offer.model'

export type Auth = {
  user: User | null
  isSuccess: boolean
  isLoading: boolean
  isError: boolean
  errorMessage: string

  signUp: (user: SignUpFormDataModel) => void
  signIn: (user: SignInFormDataModel) => void
  signOut: () => void
  checkTokenExpiration: () => boolean | undefined
  getToken: () => string
  updateUser: (userData: UserModel) => void
}

export type User = {
  id: string
  username: string
  email: string
  image?: string
  token: string
  is_admin: boolean
}

export type JWT = {
  id: string
  iat: number
  exp?: number
}
