import { Layout, Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import Offers from '../components/Offers/Offers'
import Search from '../components/Search/Search'
import { OfferType } from '../models/Offer.model'
import { OffersService } from '../services/OffersService'

const Home = () => {
  const [offers, setOffers] = useState({} as OfferType)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await OffersService.getOffers()
        setOffers(response)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <Layout style={{ padding: '20px' }}>
      <Layout.Content style={{ flex: 1, marginBottom: '20px' }}>
        <Space>
          <Search />
        </Space>
      </Layout.Content>
      <Layout.Content style={{ flex: 11 }}>
        <Typography.Title level={3}>Offers</Typography.Title>
        <Offers offers={offers} isLoading={isLoading} />
      </Layout.Content>
    </Layout>
  )
}

export default Home
