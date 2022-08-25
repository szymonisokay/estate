import { Layout, Space, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import Offers from '../../components/Offers/Offers'
import Search from '../../components/Search/Search'
import { fetchOffers, offersSelector } from '../../features/offers/offersSlice'

const Home = () => {
  const { offers, isLoading } = useSelector(offersSelector)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch])

  return (
    <Layout style={{ padding: '20px' }}>
      <Layout.Content style={{ flex: 2, marginBottom: '20px' }}>
        <Space>
          <Search />
        </Space>
      </Layout.Content>
      <Layout.Content style={{ flex: 10 }}>
        <Typography.Title level={3}>Offers</Typography.Title>
        <Offers offers={offers} isLoading={isLoading} isHome />
      </Layout.Content>
    </Layout>
  )
}

export default Home
