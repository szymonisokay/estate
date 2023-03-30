import { User } from '../contexts/auth/AuthContext.model'

export const transformData = (user: any): User => {
	return {
		id: user._id,
		username: user.username,
		email: user.email,
		image: user.image,
		token: user.token,
		role: user.user_role_id.role_name,
	}
}
