export type SignUpFormDataModel = {
  username: string
  email: string
  password: string
  password2?: string
}

export type SignInFormDataModel = {
  email: string
  password: string
  remember: boolean
}
