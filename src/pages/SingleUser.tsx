import { Avatar, Button, Col, Layout, List, Row, Space, Spin, Tag, Typography } from 'antd'
import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/auth/AuthContext'
import { transformNumber } from '../helpers/TransformNumber'
import { UserWithOffers } from '../models/Offer.model'
import { UsersService } from '../services/UsersService'

const SingleUser = () => {
	const [user, setUser] = useState<UserWithOffers>({} as UserWithOffers)
	const [isLoading, setIsLoading] = useState(false)

	const { getToken } = useAuth()
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				if (id) {
					const response = await UsersService.getUserWithOffers(id, getToken())
					setUser(response)
					console.log(response)
				}
			} catch (error: any) {
				console.log(error.response.data.message)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [getToken, id])

	if (isLoading) {
		return (
			<Space style={{ width: '100%', justifyContent: 'center' }}>
				<Spin />
			</Space>
		)
	}

	if (!isLoading && Object.keys(user).length === 0) {
		return <Typography.Text>User not found</Typography.Text>
	}

	return (
		<Layout style={{ rowGap: '30px', padding: '20px' }}>
			<Layout.Content>
				<Typography.Title level={4}>User details</Typography.Title>
				<Row gutter={[24, 24]}>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						<Space direction='horizontal' style={{ width: '100%' }}>
							{user.image ? (
								<Avatar size='large' src={user.image} />
							) : (
								<Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>
							)}
							<Space direction='vertical'>
								<Typography.Text strong type='secondary'>
									{user.username}
								</Typography.Text>
								<Typography.Text type='secondary'>{user.email}</Typography.Text>
							</Space>
						</Space>
					</Col>
				</Row>
				<Row style={{ marginTop: '50px' }}>
					<Col span={24}>
						<Typography.Title level={4}>Active offers</Typography.Title>
						<List
							itemLayout='vertical'
							dataSource={user.offers}
							renderItem={(offer) => (
								<List.Item
									style={{
										padding: '20px',
										marginBottom: '20px',
										background: '#fff',
									}}
									actions={[
										<Button>
											<Link to={`/offers/${offer._id}`}>Show</Link>
										</Button>,
									]}
									extra={
										<img
											src={offer.images.featured}
											alt={offer.title}
											style={{
												width: '250px',
												height: '130px',
												objectFit: 'cover',
												borderRadius: '2px',
											}}
										/>
									}
								>
									<List.Item.Meta
										title={
											<Space>
												<Typography.Title level={5} style={{ margin: 0 }}>
													{offer.title}
												</Typography.Title>
												<Tag color='blue'>{transformNumber(offer.price!)} C</Tag>
											</Space>
										}
										description={offer.description.slice(0, 100)}
									/>
								</List.Item>
							)}
						/>
					</Col>
				</Row>
			</Layout.Content>
		</Layout>
	)
}

export default SingleUser
