import { FormEvent, useState, useEffect } from 'react'
import { ReactComponent as Estate } from '../assets/svgs/Estate_v2.svg'
import { BiEnvelope, BiLockAlt } from 'react-icons/bi'
import { SignInFormDataModel } from '../models/FormData.model'
import { useAuth } from '../contexts/auth/AuthContext'
import { toast } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, Checkbox, Input, Layout, Space, Spin, Typography } from 'antd'

const initialSignInFormData = {
	email: '',
	password: '',
	remember: false,
}

const Login = () => {
	const [formData, setFormData] = useState<SignInFormDataModel>(initialSignInFormData)

	const { signIn, isLoading, isSuccess, isError, errorMessage } = useAuth()
	const navigate = useNavigate()
	const location = useLocation()

	const history = location.state as string

	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		signIn(formData)
	}

	useEffect(() => {
		if (isSuccess) {
			toast.success('Signed In successfully!')
			setTimeout(() => navigate(history ? history : '/'), 1000)
		}
	}, [isSuccess, navigate, history])

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
								Login into your Estate. account and continue your journey.
							</Typography.Title>

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

							<Space style={{ width: '100%', justifyContent: 'space-between' }}>
								<Checkbox
									checked={formData.remember}
									onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
								>
									Remember me?
								</Checkbox>
								{/* <Link to='#'>Forgot password?</Link> */}
							</Space>

							<Button type='primary' htmlType='submit' size='large' style={{ width: '100%' }}>
								{isLoading ? <Spin className='spinner-white' /> : 'Sign In'}
							</Button>

							<Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
								<Typography.Text>Don't have an account?</Typography.Text>
								<Link to='/register'>Sign Up</Link>
							</Space>
						</Space>
					</form>
				</Card>
			</Layout.Content>
		</Layout>
	)
}

export default Login
