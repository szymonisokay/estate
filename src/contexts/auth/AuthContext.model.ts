import { SignUpFormDataModel } from '../../models/FormData.model'

export type Auth = {
  user: User | null

  signUp: (user: SignUpFormDataModel) => void
}

export type User = {
  name: string
  email: string
  image?: string
  token: string
}
