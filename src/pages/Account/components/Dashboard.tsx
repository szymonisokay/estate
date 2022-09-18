import {
  Button,
  Card,
  Col,
  Layout,
  List,
  Row,
  Space,
  Spin,
  Statistic,
  Table,
  Tag,
  Typography,
} from 'antd'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { transformNumber } from '../../../helpers/TransformNumber'
import { OfferType } from '../../../models/Offer.model'
import { Wallet } from '../../../models/Wallet.model'
import { OffersService } from '../../../services/OffersService'
import { WalletService } from '../../../services/WalletService'

const Dashboard = () => {
  const [offers, setOffers] = useState<OfferType>({} as OfferType)
  const [wallet, setWallet] = useState<Wallet>({} as Wallet)
  const [isLoading, setIsLoading] = useState(false)

  const { user, getToken } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        if (user) {
          const offers = await OffersService.getUserOffers(user.id, getToken())
          setOffers(offers)

          const wallet = await WalletService.getWalletInfo(getToken())
          setWallet(wallet)
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
    <Layout style={{ rowGap: '30px' }}>
      <Layout.Content>
        <Typography.Title level={4}>Brief account details</Typography.Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Statistic
                title='Available credits'
                value={wallet.wallet_points}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title='No. of active offers'
                value={offers.total}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title='No. of transactions'
                value={wallet.transactions?.length}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Content>
        <Typography.Title level={4}>Your active offers</Typography.Title>
        <List
          itemLayout='vertical'
          dataSource={
            Array.isArray(offers.results) ? offers.results.slice(0, 2) : []
          }
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
      </Layout.Content>

      <Layout.Content>
        <Typography.Title level={4}>Your transactions</Typography.Title>
        <Table
          pagination={false}
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
              render: (status) => <Tag color='blue'>{status} </Tag>,
            },
          ]}
        />
      </Layout.Content>
    </Layout>
  )
}

export default Dashboard
