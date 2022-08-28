import React from 'react'
import { BiMap, BiNavigation } from 'react-icons/bi'
import { IoBookmark } from 'react-icons/io5'
import { Offer } from '../../models/Offer.model'
import { transformNumber } from '../../helpers/TransformNumber'
import { Card, Space, Tag, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

type ComponentType = {
  offer: Offer
}

const SingleOffer: React.FC<ComponentType> = ({ offer }) => {
  const navigate = useNavigate()

  const cardActions = [
    <IoBookmark size={18} key='bookmark' onClick={() => onClick('bookmark')} />,
    <BiNavigation
      size={20}
      key='navigate'
      onClick={() => onClick('navigate')}
    />,
  ]

  const address = `${offer.location.street}, ${offer.location.city}, ${offer.location.country}, ${offer.location.zip_code}`

  const onClick = (data: 'bookmark' | 'navigate') => {
    switch (data) {
      case 'bookmark':
        break
      case 'navigate':
        navigate(`offers/${offer._id}`)
        break
    }
  }

  return (
    <Card
      cover={
        <img
          src={offer.images.featured}
          alt={offer.title}
          style={{ height: '170px', objectFit: 'cover' }}
        />
      }
      actions={cardActions}
    >
      <Card.Meta
        title={
          <Space
            style={{
              width: '100%',
              justifyContent: 'space-between',
            }}
            align='start'
          >
            <Typography.Title level={4}>{offer.title}</Typography.Title>

            <Tag color='blue' style={{ margin: 0 }}>
              {transformNumber(offer!.price)} C
            </Tag>
          </Space>
        }
        description={
          <Space>
            <BiMap size={18} />
            <Typography.Text type='secondary'>{address}</Typography.Text>
          </Space>
        }
      />
    </Card>
  )
}

export default SingleOffer
