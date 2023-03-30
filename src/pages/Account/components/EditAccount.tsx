import {
	Button,
	Card,
	Col,
	Divider,
	Image,
	Input,
	Layout,
	Modal,
	Row,
	Space,
	Spin,
	Statistic,
	Typography,
	Upload,
} from 'antd'
import { useEffect, useState } from 'react'
import { BiEnvelope, BiLockAlt, BiUser } from 'react-icons/bi'
import { RiCoupon2Line } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { ChangePassword } from '../../../models/FormData.model'
import { User } from '../../../models/Offer.model'
import { Wallet } from '../../../models/Wallet.model'
import { UsersService } from '../../../services/UsersService'
import { WalletService } from '../../../services/WalletService'

const EditAccount = () => {
	const [user, setUser] = useState<User>({} as User)
	const [wallet, setWallet] = useState<Wallet>({} as Wallet)
	const [isLoading, setIsLoading] = useState(false)
	const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false)
	const [isLoadingChangePassword, setIsLoadingChangePassword] = useState(false)
	const [isAddCreditsModalOpen, setIsAddCreditsModalOpen] = useState(false)
	const [isLoadingAddCredits, setIsLoadingAddCredits] = useState(false)
	const [passwords, setPassword] = useState<ChangePassword>({} as ChangePassword)
	const [coupon, setCoupon] = useState<string>('')

	const { user: authUser, getToken, updateUser } = useAuth()

	const onSave = async () => {
		try {
			setIsLoading(true)
			const { msg, user: changedUser } = await UsersService.updateUser(user, getToken())
			toast.success(msg)
			setUser(changedUser)
			updateUser(changedUser)
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	const onChangePassword = async () => {
		try {
			setIsLoadingChangePassword(true)
			const { msg } = await UsersService.changePassword(user.id, passwords, getToken())
			toast.success(msg)
			setIsChangePasswordModalOpen(false)
		} catch (error: any) {
			toast.error(error.response.data.message)
		} finally {
			setIsLoadingChangePassword(false)
		}
	}

	const onAddCredits = async () => {
		try {
			setIsLoadingAddCredits(true)
			const { msg, wallet } = await WalletService.addCredits(coupon, getToken())
			toast.success(msg)
			setWallet(wallet)
			setIsAddCreditsModalOpen(false)
		} catch (error: any) {
			toast.error(error.response.data.message)
		} finally {
			setIsLoadingAddCredits(false)
		}

		setCoupon('')
	}

	const onModalCancel = (selection: 'credits' | 'password') => {
		switch (selection) {
			case 'credits':
				setIsAddCreditsModalOpen(false)
				break
			case 'password':
				setIsChangePasswordModalOpen(false)
				break
		}
	}

	const uploadAvatar = async (e: any) => {
		const formData = new FormData()

		formData.append('avatar', e.file)

		const user = await UsersService.uploadAvatar(formData, getToken())
		setUser(user)
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				if (authUser) {
					const response = await UsersService.getUser(authUser.id, getToken())
					setUser(response)

					const wallet = await WalletService.getWalletInfo(getToken())
					setWallet(wallet)
				}
			} catch (error: any) {
				console.log(error.response.data.message)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [authUser, getToken])

	if (isLoading) {
		return (
			<Space style={{ width: '100%', justifyContent: 'center' }}>
				<Spin />
			</Space>
		)
	}

	return (
		<>
			<Layout style={{ rowGap: '30px' }}>
				<Layout.Content>
					<Typography.Title level={4}>Account details</Typography.Title>
					<Row gutter={[24, 24]}>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Space direction='vertical' style={{ width: '100%' }}>
								<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
									<Typography.Text type='secondary'>Username</Typography.Text>
									<Input
										type='text'
										value={user.username}
										prefix={<BiUser />}
										size='large'
										onChange={(e) =>
											setUser((user) => {
												return {
													...user,
													username: e.target.value,
												}
											})
										}
									/>
								</Space>
								<Space direction='vertical' style={{ width: '100%', rowGap: '2px' }}>
									<Typography.Text type='secondary'>Email</Typography.Text>
									<Input
										type='email'
										value={user.email}
										disabled
										prefix={<BiEnvelope />}
										size='large'
									/>
								</Space>
								<Space split={<Divider type='vertical' />} style={{ marginTop: '20px' }}>
									<Button type='primary' size='large' onClick={onSave}>
										Save
									</Button>
									<Button size='large' onClick={() => setIsChangePasswordModalOpen(true)}>
										Change password
									</Button>
								</Space>
							</Space>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Space direction='vertical' size='middle' style={{ width: '100%' }}>
								<Image
									style={{
										width: '100%',
									}}
									src={user.image}
									fallback='data:image/png;base64,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'
								/>
								<Upload fileList={[]} accept='.jpg, .png' customRequest={(e) => uploadAvatar(e)}>
									<Button type='primary' size='large'>
										Upload image
									</Button>
								</Upload>
							</Space>
						</Col>
					</Row>
				</Layout.Content>
				<Layout.Content>
					<Typography.Title level={4}>Account balance</Typography.Title>
					<Card style={{ width: 'max-content' }}>
						<Statistic
							title='Available credits'
							value={wallet.wallet_points}
							valueStyle={{ color: '#1890ff' }}
						/>
					</Card>
					<Button
						type='primary'
						size='large'
						style={{ marginTop: '20px' }}
						onClick={() => setIsAddCreditsModalOpen(true)}
					>
						Recharge credits
					</Button>
				</Layout.Content>
			</Layout>

			<Modal
				visible={isChangePasswordModalOpen}
				title='Change password'
				onOk={onChangePassword}
				onCancel={() => onModalCancel('password')}
				confirmLoading={isLoadingChangePassword}
			>
				<Space direction='vertical'>
					<Space direction='vertical' style={{ rowGap: '2px' }}>
						<Typography.Text type='secondary'>Current password</Typography.Text>
						<Input
							type='password'
							value={passwords.password}
							prefix={<BiLockAlt />}
							size='large'
							onChange={(e) =>
								setPassword((passwords) => {
									return {
										...passwords,
										password: e.target.value,
									}
								})
							}
						/>
					</Space>
					<Space direction='vertical' style={{ rowGap: '2px' }}>
						<Typography.Text type='secondary'>New password</Typography.Text>
						<Input
							type='password'
							value={passwords.changedPassword}
							prefix={<BiLockAlt />}
							size='large'
							onChange={(e) =>
								setPassword((passwords) => {
									return {
										...passwords,
										changedPassword: e.target.value,
									}
								})
							}
						/>
					</Space>
				</Space>
			</Modal>

			<Modal
				visible={isAddCreditsModalOpen}
				title='Add credits'
				onOk={onAddCredits}
				onCancel={() => onModalCancel('credits')}
				confirmLoading={isLoadingAddCredits}
			>
				<Space direction='vertical'>
					<Typography.Text>Enter coupon to add credits to your account.</Typography.Text>
					<Space direction='vertical' style={{ rowGap: '2px' }}>
						<Typography.Text type='secondary'>Coupon</Typography.Text>
						<Input
							type='text'
							value={coupon}
							size='large'
							prefix={<RiCoupon2Line />}
							onChange={(e) => setCoupon(e.target.value)}
						/>
					</Space>
				</Space>
			</Modal>
		</>
	)
}

export default EditAccount
