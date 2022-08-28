import {
  Avatar,
  Button,
  Divider,
  Image,
  Layout,
  List,
  Space,
  Spin,
  Tag,
  Typography,
} from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { BiCalendar, BiExpandAlt, BiTimeFive } from 'react-icons/bi'
import { CgTrees } from 'react-icons/cg'
import { useParams } from 'react-router-dom'
import { transformNumber } from '../helpers/TransformNumber'
import { Offer } from '../models/Offer.model'
import { OffersService } from '../services/OffersService'

const SingleOffer = () => {
  const { id } = useParams()
  const [offer, setOffer] = useState({} as Offer)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        if (id) {
          const response = await OffersService.getOffer(id)
          setOffer(response.results as Offer)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (isLoading) {
    return <Spin />
  }

  if (!isLoading && Object.keys(offer).length === 0)
    return <Typography.Text>offer not found</Typography.Text>

  return (
    <Layout>
      <Layout.Content
        style={{
          flex: 'unset',
          height: 'max-content',
        }}
      >
        <Image src={offer.images.featured} width='100%' />
      </Layout.Content>
      <Layout.Content
        style={{ display: 'flex', flexDirection: 'column', padding: '50px' }}
      >
        <Space
          direction='horizontal'
          style={{ justifyContent: 'space-between' }}
        >
          <Space direction='vertical'>
            <Space style={{ marginBottom: '8px' }}>
              <BiTimeFive color='#00000073' />
              <Typography.Text type='secondary'>
                Posted {moment(offer.createdAt).fromNow()}
              </Typography.Text>
            </Space>
            <Space align='start' style={{ columnGap: '20px' }}>
              <Typography.Title level={3}>{offer.title}</Typography.Title>
              <Tag color='blue'>{transformNumber(offer.price!)} C</Tag>
            </Space>
            <Space>
              <Space align='start'>
                <BiExpandAlt size={18} color='#1890ff' />
                <Typography.Text type='secondary'>
                  {transformNumber(offer.area!)} m²
                </Typography.Text>
              </Space>
              <Divider type='vertical' />
              <Space align='start'>
                <CgTrees size={18} color='#1890ff' />
                <Typography.Text type='secondary'>
                  {transformNumber(offer.land_area!)} m²
                </Typography.Text>
              </Space>
              <Divider type='vertical' />
              <Space align='start'>
                <BiCalendar size={18} color='#1890ff' />
                <Typography.Text type='secondary'>
                  {offer.available}
                </Typography.Text>
              </Space>
            </Space>
          </Space>
          <Space direction='vertical'>
            <Button type='primary' size='large'>
              Purchase
            </Button>
            <Divider style={{ margin: 0 }}>
              <Typography.Text type='secondary'>OR</Typography.Text>
            </Divider>
            <Button block type='link' size='large'>
              Rent
            </Button>
          </Space>
        </Space>

        <List
          style={{ marginTop: '50px' }}
          size='default'
          grid={{ gutter: 16, column: 4 }}
          header={
            <Typography.Text strong style={{ fontSize: '18px' }}>
              Facilities
            </Typography.Text>
          }
          dataSource={offer.facilities}
          renderItem={(item) => (
            <List.Item>
              <Space>
                <BiCalendar size={18} />
                <Typography.Text type='secondary'>{item}</Typography.Text>
              </Space>
            </List.Item>
          )}
        />

        <List
          size='default'
          header={
            <Typography.Text strong style={{ fontSize: '18px' }}>
              Additional information
            </Typography.Text>
          }
          style={{ marginTop: '50px' }}
        >
          <List.Item style={{ justifyContent: 'flex-start' }}>
            <Typography.Text strong style={{ width: '150px' }}>
              Property type:
            </Typography.Text>
            <Typography.Text type='secondary'>
              {offer.property_type}
            </Typography.Text>
          </List.Item>
          <List.Item style={{ justifyContent: 'flex-start' }}>
            <Typography.Text strong style={{ width: '150px' }}>
              Construction year:
            </Typography.Text>
            <Typography.Text type='secondary'>
              {offer.construction_year}
            </Typography.Text>
          </List.Item>
          {offer.is_parking && (
            <List.Item style={{ justifyContent: 'flex-start' }}>
              <Typography.Text strong style={{ width: '150px' }}>
                Parking:
              </Typography.Text>
              <Typography.Text type='secondary'>
                {offer.parking.parking_type}; {offer.parking.parking_num} spots
              </Typography.Text>
            </List.Item>
          )}
        </List>

        <List
          size='default'
          header={
            <Typography.Text strong style={{ fontSize: '18px' }}>
              Localization
            </Typography.Text>
          }
          style={{ marginTop: '50px' }}
        >
          <List.Item style={{ justifyContent: 'flex-start' }}>
            <Typography.Text strong style={{ width: '150px' }}>
              Address:
            </Typography.Text>
            <Typography.Text type='secondary'>
              {offer.location.street}, {offer.location.city},{' '}
              {offer.location.country}, {offer.location.zip_code}
            </Typography.Text>
          </List.Item>
          <List.Item style={{ justifyContent: 'flex-start' }}>
            <Typography.Text strong style={{ width: '150px' }}>
              Surroundings:
            </Typography.Text>
            <Typography.Text type='secondary'>
              {offer.surroundings}
            </Typography.Text>
          </List.Item>
          <List.Item style={{ justifyContent: 'flex-start' }}>
            <Typography.Text strong style={{ width: '150px' }}>
              Nearby:
            </Typography.Text>
            <Typography.Text type='secondary'>{offer.nearby}</Typography.Text>
          </List.Item>
        </List>

        <Space direction='vertical' style={{ marginTop: '50px' }}>
          <Typography.Text strong style={{ fontSize: '18px' }}>
            Description
          </Typography.Text>
          <Typography.Text type='secondary'>
            {offer.description}
          </Typography.Text>
        </Space>

        <Space direction='vertical' style={{ marginTop: '50px' }}>
          <Typography.Text strong style={{ fontSize: '18px' }}>
            Contact details
          </Typography.Text>
          <Space
            direction='horizontal'
            style={{
              columnGap: '20px',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            {offer.user.image ? (
              <Avatar size='large' src={offer.user.image} />
            ) : (
              <Avatar size='large' style={{ background: '#1890ff' }}>
                {offer.user.username.charAt(0).toUpperCase()}
              </Avatar>
            )}
            <Space direction='vertical' style={{ rowGap: 0 }}>
              <Typography.Text strong style={{ fontSize: '16px' }}>
                {offer.user.username}
              </Typography.Text>
              <Typography.Text type='secondary'>
                {offer.user.email}
              </Typography.Text>
            </Space>
          </Space>
          <Button size='large' type='default'>
            More information
          </Button>
        </Space>
      </Layout.Content>
    </Layout>
  )
}

export default SingleOffer
