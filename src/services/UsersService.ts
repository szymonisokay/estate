import axios from 'axios'
import { transformData } from '../helpers/TransformData'
import { ChangePassword } from '../models/FormData.model'
import { Offer, User } from '../models/Offer.model'
import { getEndpoint } from '../utils/api-endpoints.config'

const getUser = async (id: string, token: string) => {
	const endpoint = getEndpoint('getUser').path.replace('{id}', id)

	const response = await axios.get<User>(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return response.data
}

const updateUser = async (user: User, token: string) => {
	const endpoint = getEndpoint('updateUser').path.replace('{id}', user.id)
	const response = await axios.put(endpoint, user, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return response.data as { msg: string; user: User }
}

const deleteUser = async (id: string, token: string) => {
	const endpoint = getEndpoint('deleteUser').path.replace('{id}', id)

	const response = await axios.delete<User>(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return transformData(response.data)
}

const changePassword = async (id: string, passwords: ChangePassword, token: string) => {
	const endpoint = getEndpoint('changePassword').path.replace('{id}', id)
	const response = await axios.put(endpoint, passwords, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return response.data as { msg: string; user: User }
}

const getUsers = async (token: string) => {
	const endpoint = getEndpoint('getUsers').path

	const response = await axios.get<User[]>(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return response.data.map((user) => transformData(user))
}

const uploadAvatar = async (formData: FormData, token: string) => {
	const endpoint = getEndpoint('uploadAvatar').path

	const response = await axios.post<User>(endpoint, formData, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return transformData(response.data)
}

const getUserWithOffers = async (id: string, token: string) => {
	const endpoint = getEndpoint('getUserWithOffers').path.replace('{id}', id)

	const response = await axios.get(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return { offers: response.data.offers as Offer[], ...transformData(response.data) }
}

export const UsersService = {
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	changePassword,
	uploadAvatar,
	getUserWithOffers,
}
