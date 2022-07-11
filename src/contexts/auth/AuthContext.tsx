import React, { createContext, useContext, useEffect, useState } from 'react'
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
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const signUp = async (userData: SignUpFormDataModel) => {
    setIsLoading(true)

    if (userData.password !== userData.password2) {
      setIsError(true)
      setErrorMessage('Passwords do not match')
    } else {
      await AuthService.signUpUser(userData)
        .then((user) => {
          setUser(user)
          setIsSuccess(true)
          localStorage.setItem('user', JSON.stringify(user))
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message)
          setIsError(true)
        })
    }

    setTimeout(() => {
      setIsError(false)
      setErrorMessage('')
      setIsSuccess(false)
    }, 3000)
    setIsLoading(false)
  }

  const signIn = async (userData: SignInFormDataModel) => {
    setIsLoading(true)

    await AuthService.signInUser(userData)
      .then((user) => {
        setUser(user)
        setIsSuccess(true)
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((err) => {
        setIsError(true)
        setErrorMessage(err.response.data.message)
      })

    setTimeout(() => {
      setIsError(false)
      setErrorMessage('')
      setIsSuccess(false)
    }, 3000)
    setIsLoading(false)
  }

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (!!user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isError,
        isSuccess,
        errorMessage,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext) as Auth
}
