import React, { useEffect, useState, useCallback } from 'react'
import { BiMap, BiNavigation } from 'react-icons/bi'
import { IoBookmark } from 'react-icons/io5'
import { Offer } from '../models/Offer.model'
import { transformNumber } from '../helpers/TransformNumber'
import { Card, Space, Tag, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { toast } from 'react-toastify'
import { BookmarksService } from '../services/BookmarksService'
import { useAuth } from '../contexts/auth/AuthContext'

type ComponentType = {
  offer: Offer
  type: string
}

const SingleOffer: React.FC<ComponentType> = ({ offer, type }) => {
  const [isBookmark, setIsBookmark] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const navigate = useNavigate()
  const { getToken } = useAuth()

  const cardActions = [
    <IoBookmark
      size={18}
      key='bookmark'
      color={isBookmark ? '#1890ff' : 'currentColor'}
      onClick={() => onClick('bookmark')}
    />,
    <BiNavigation
      size={20}
      key='navigate'
      onClick={() => onClick('navigate')}
    />,
  ]

  const manageBookmarks = () => {
    setIsClicked(true)
    setIsBookmark(!isBookmark)
  }

  const addBookmark = useCallback(async () => {
    const { msg } = await BookmarksService.addBookmark(offer._id!, getToken())
    toast.info(msg)
  }, [offer._id, getToken])

  const removeBookmark = useCallback(async () => {
    const { msg } = await BookmarksService.removeBookmark(
      offer._id!,
      getToken()
    )
    toast.info(msg)
  }, [offer._id, getToken])

  const onClick = (data: 'bookmark' | 'navigate') => {
    switch (data) {
      case 'bookmark':
        manageBookmarks()
        break
      case 'navigate':
        navigate(`offers/${offer._id}`)
        break
    }
  }

  useEffect(() => {
    if (isClicked) {
      isBookmark ? addBookmark() : removeBookmark()
    }
  }, [isBookmark, isClicked, addBookmark, removeBookmark])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { bookmarks } = await BookmarksService.getBookmarks(getToken())
        setIsBookmark(bookmarks.includes(offer._id!) ? true : false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [offer._id, getToken])

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
            direction='vertical'
            align='start'
            style={{ width: '100%' }}
            className='offercard_meta'
          >
            <Space
              direction='horizontal'
              style={{
                fontSize: '12px',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Typography.Text type='secondary' style={{ fontWeight: 500 }}>
                Posted {moment(offer.createdAt).fromNow()}
              </Typography.Text>

              {type === 'purchase' ? (
                <Tag color='blue' style={{ margin: 0 }}>
                  {transformNumber(offer!.price)} C
                </Tag>
              ) : (
                <Tag color='blue' style={{ margin: 0 }}>
                  {transformNumber(offer!.price_month)} C
                </Tag>
              )}
            </Space>

            <Typography.Title level={4}>{offer.title}</Typography.Title>
          </Space>
        }
        description={
          <Space>
            <BiMap size={18} />
            <Typography.Text type='secondary'>
              {offer.location.street}, {offer.location.city},{' '}
              {offer.location.country}, {offer.location.zip_code}
            </Typography.Text>
          </Space>
        }
      />
    </Card>
  )
}

export default SingleOffer
