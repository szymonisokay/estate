import React, { createContext, useContext, useState } from 'react'
import { Auth, User } from './AuthContext.model'
import {
  SignInFormDataModel,
  SignUpFormDataModel,
} from '../../models/FormData.model'
import { AuthService } from '../../services/auth/AuthService'

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<Auth | null>(null)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const signUp = async (userData: SignUpFormDataModel) => {
    setIsLoading(true)

    await AuthService.signUpUser(userData)
      .then((user) => {
        setUser(user)
        setIsLoading(false)
      })
      .catch((err) => console.log(err.response.data.message))
  }

  const signIn = async (userData: SignInFormDataModel) => {
    setIsLoading(true)

    await AuthService.signInUser(userData).then((user) => {
      setUser(user)
      setIsLoading(false)
    })
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext) as Auth
}
