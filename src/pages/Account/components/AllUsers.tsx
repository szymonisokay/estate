import { Avatar, Button, Layout, List, Modal, Space, Spin, Typography } from 'antd'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { User } from '../../../models/Offer.model'
import { UsersService } from '../../../services/UsersService'

const AllUsers = () => {
	const [users, setUsers] = useState<User[]>([])
	const [userToDelete, setUserToDelete] = useState<string>('')
	const [isLoading, setIsLoading] = useState(false)
	const [isLoadingDeleteUser, setIsLoadingDeleteUser] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const { user, getToken } = useAuth()
	const navigate = useNavigate()

	const onDeleteUser = async () => {
		try {
			setIsLoadingDeleteUser(true)
			const response = await UsersService.deleteUser(userToDelete, getToken())
			toast.error(`User ${response.username} deleted`)
			setUsers(users.filter((user) => user.id !== response.id))
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoadingDeleteUser(false)
			setIsModalOpen(false)
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				if (user) {
					const users = await UsersService.getUsers(getToken())
					setUsers(users)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [user, getToken])

	if (isLoading) {
		return (
			<Space style={{ width: '100%', justifyContent: 'center' }}>
				<Spin />
			</Space>
		)
	}

	return (
		<>
			<Layout>
				<Layout.Content>
					<Typography.Title level={4}>All users</Typography.Title>
					<List
						dataSource={users}
						renderItem={(user) => (
							<List.Item
								style={{
									padding: '20px',
									marginBottom: '20px',
									background: '#fff',
								}}
								actions={[
									<Button onClick={() => navigate(`/users/${user.id}`)}>Show</Button>,
									<Button
										type='primary'
										danger
										onClick={() => {
											setIsModalOpen(true)
											setUserToDelete(user.id)
										}}
										disabled={user.role === 'Admin'}
									>
										Delete
									</Button>,
								]}
							>
								<List.Item.Meta
									style={{ alignItems: 'center' }}
									avatar={
										user.image ? (
											<Avatar size='large' src={user.image} />
										) : (
											<Avatar size='large' style={{ background: '#1890ff' }}>
												{user.username.charAt(0).toUpperCase()}
											</Avatar>
										)
									}
									title={
										<Space>
											<Typography.Title level={5} style={{ margin: 0 }}>
												{user.username}
											</Typography.Title>
										</Space>
									}
									description={user.email}
								/>
							</List.Item>
						)}
					/>
				</Layout.Content>
			</Layout>

			<Modal
				visible={isModalOpen}
				title='Delete offer'
				onOk={onDeleteUser}
				onCancel={() => setIsModalOpen(false)}
				confirmLoading={isLoadingDeleteUser}
				footer={[
					<Button key='cancel' onClick={() => setIsModalOpen(false)}>
						Cancel
					</Button>,
					<Button key='delete' type='primary' danger onClick={onDeleteUser}>
						Delete
					</Button>,
				]}
			>
				<Space direction='vertical' align='center' style={{ width: '100%' }}>
					<Typography.Text strong>Are you sure you want to delele this user?</Typography.Text>
					<Typography.Text>This action will be irreversible!</Typography.Text>
				</Space>
			</Modal>
		</>
	)
}

export default AllUsers
