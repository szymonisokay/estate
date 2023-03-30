import { Layout, Space, Spin, Table, Tag, Typography } from 'antd'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { isBooleanObject } from 'util/types'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { transformNumber } from '../../../helpers/TransformNumber'
import { Wallet } from '../../../models/Wallet.model'
import { WalletService } from '../../../services/WalletService'

const Transactions = () => {
	const [wallet, setWallet] = useState<Wallet>({} as Wallet)
	const [isLoading, setIsLoading] = useState(false)

	const { getToken } = useAuth()

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const wallet = await WalletService.getWalletInfo(getToken())
				setWallet(wallet)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [getToken])

	if (isLoading && Object.keys(wallet).length === 0) {
		return (
			<Space style={{ width: '100%', justifyContent: 'center' }}>
				<Spin />
			</Space>
		)
	}

	return (
		<Layout>
			<Typography.Title level={4}>Your transactions</Typography.Title>
			<Table
				pagination={false}
				scroll={{ x: 600 }}
				dataSource={
					Object.keys(wallet).length === 0
						? []
						: wallet.transactions.map((transaction) => ({
								...transaction,
								key: transaction._id,
						  }))
				}
				columns={[
					{
						title: 'Date',
						dataIndex: 'createdAt',
						key: 'createdAt',
						render: (date) => moment(date).format('MMM Do YYYY'),
					},
					{ title: 'Offer', dataIndex: ['offer', 'title'], key: 'offer' },
					{
						title: 'Price',
						dataIndex: ['offer', 'price'],
						key: 'price',
						render: (price) => `${transformNumber(price)} C`,
					},
					{
						title: 'Status',
						dataIndex: 'status',
						key: 'status',
						render: (status) => (
							<Tag key={status} color='blue'>
								{status}{' '}
							</Tag>
						),
					},
				]}
			/>
		</Layout>
	)
}

export default Transactions
