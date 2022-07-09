import React, { createContext, useContext, useState } from 'react'
import { Auth, User } from './AuthContext.model'
import { SignUpFormDataModel } from '../../models/FormData.model'

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<Auth | null>(null)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const signUp = (userData: SignUpFormDataModel): void => {
    setTimeout(() => console.log(userData), 2000)
  }

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext) as Auth
}
