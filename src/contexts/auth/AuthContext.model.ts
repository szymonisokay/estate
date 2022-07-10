import {
  SignInFormDataModel,
  SignUpFormDataModel,
} from '../../models/FormData.model'

export type Auth = {
  user: User | null
  isLoading: boolean
  isError: boolean
  errorMessage: string

  signUp: (user: SignUpFormDataModel) => void
  signIn: (user: SignInFormDataModel) => void
}

export type User = {
  id: string
  username: string
  email: string
  image?: string
  token: string
  is_admin: boolean
}
