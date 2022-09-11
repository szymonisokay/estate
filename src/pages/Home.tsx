import { Layout, Select, Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import Offers from '../components/Offers'
import FiltersComponent from '../components/Filters'
import { OfferType } from '../models/Offer.model'
import { OffersService } from '../services/OffersService'
import { Filters, initialFilters, sortOptions } from '../config/filters.config'
import { useAuth } from '../contexts/auth/AuthContext'

const Home = () => {
  const [offers, setOffers] = useState<OfferType>({} as OfferType)
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState<Filters>(initialFilters as Filters)
  const [sort, setSort] = useState<string>(sortOptions[0].value)

  const { type, location, minPrice, maxPrice, minArea, maxArea } = filters
  const { getToken } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const offers = await OffersService.getOffers(
          type,
          location,
          minPrice,
          maxPrice,
          minArea,
          maxArea,
          sort,
          getToken()
        )
        setOffers(offers)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [type, location, minPrice, maxPrice, minArea, maxArea, sort, getToken])

  return (
    <Layout style={{ padding: '20px' }}>
      <Layout.Content style={{ flex: 1, marginBottom: '20px' }}>
        <FiltersComponent filters={filters} setFilters={setFilters} />
      </Layout.Content>
      <Layout.Content style={{ flex: 11 }}>
        <Space
          style={{ width: '100%', justifyContent: 'space-between' }}
          align='start'
        >
          <Typography.Title level={3}>Offers</Typography.Title>
          <Select
            defaultValue={sort}
            options={sortOptions}
            placement='bottomRight'
            onChange={(e) => setSort(e)}
          />
        </Space>
        <Offers offers={offers} isLoading={isLoading} type={type} />
      </Layout.Content>
    </Layout>
  )
}

export default Home
