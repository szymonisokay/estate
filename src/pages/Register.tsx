import { FormEvent, useEffect, useState } from 'react'
import { ReactComponent as Estate } from '../assets/svgs/Estate_v2.svg'
import { BiEnvelope, BiLockAlt, BiUser } from 'react-icons/bi'

import { SignUpFormDataModel } from '../models/FormData.model'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Input, Layout, Space, Spin, Typography } from 'antd'

const initialSignUpFormData = {
	username: '',
	email: '',
	password: '',
	password2: '',
}

const Register = () => {
	const [formData, setFormData] = useState<SignUpFormDataModel>(initialSignUpFormData)

	const { signUp, isSuccess, isLoading, isError, errorMessage } = useAuth()
	const navigate = useNavigate()

	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		signUp(formData)
	}

	useEffect(() => {
		if (isSuccess) {
			toast.success('Signed Up successfully!')
			setTimeout(() => navigate('/'), 1000)
		}
	}, [isSuccess, navigate])

	useEffect(() => {
		if (isError) {
			toast.error(errorMessage)
		}
	}, [isError, errorMessage])

	return (
		<Layout style={{ flexDirection: 'row', height: '100vh' }}>
			<Layout.Content
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Card style={{ width: '400px' }}>
					<form onSubmit={onFormSubmit}>
						<Space direction='vertical' size='middle' style={{ display: 'flex', padding: '10px' }}>
							<Link to='/'>
								<Estate className='logo' />
							</Link>

							<Typography.Title level={4}>
								Create an Estate. account and start your journey.
							</Typography.Title>

							<Input
								type='text'
								size='large'
								placeholder='Your username'
								prefix={<BiUser />}
								status={isError && !formData.username ? 'error' : ''}
								value={formData.username}
								onChange={(e) => setFormData({ ...formData, username: e.target.value })}
							/>

							<Input
								type='email'
								size='large'
								placeholder='Your email'
								prefix={<BiEnvelope />}
								status={isError && !formData.email ? 'error' : ''}
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>

							<Input.Password
								size='large'
								placeholder='Your password'
								prefix={<BiLockAlt />}
								status={isError && !formData.password ? 'error' : ''}
								value={formData.password}
								onChange={(e) => setFormData({ ...formData, password: e.target.value })}
							/>

							<Input.Password
								size='large'
								placeholder='Confirm password'
								prefix={<BiLockAlt />}
								status={isError && !formData.password2 ? 'error' : ''}
								value={formData.password2}
								onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
							/>

							<Button type='primary' htmlType='submit' size='large' style={{ width: '100%' }}>
								{isLoading ? <Spin className='spinner-white' /> : 'Sign Up'}
							</Button>

							<Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
								<Typography.Text>Already have an account?</Typography.Text>
								<Link to='/login'>Sign In</Link>
							</Space>
						</Space>
					</form>
				</Card>
			</Layout.Content>
		</Layout>
	)
}

export default Register
