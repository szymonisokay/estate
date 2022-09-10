export interface SignUpFormDataModel {
  username: string
  email: string
  password: string
  password2?: string
}

export interface SignInFormDataModel {
  email: string
  password: string
  remember: boolean
}

export interface ChangePassword {
  password: string
  changedPassword: string
}
