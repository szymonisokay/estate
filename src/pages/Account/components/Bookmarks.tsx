import { Button, Layout, List, Space, Spin, Tag, Typography } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { environment } from '../../../environment/environment'
import { transformNumber } from '../../../helpers/TransformNumber'
import { OfferType } from '../../../models/Offer.model'
import { BookmarksService } from '../../../services/BookmarksService'

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<OfferType>({} as OfferType)
  const [isLoading, setIsLoading] = useState(false)

  const { user, getToken } = useAuth()

  const onRemoveBookmark = async (offerId: string) => {
    try {
      const { msg, bookmarks } = await BookmarksService.removeBookmark(
        offerId,
        getToken()
      )
      toast.info(msg)
      setBookmarks(bookmarks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        if (user) {
          const bookmarks = await BookmarksService.getPopulatedBookmarks(
            getToken()
          )
          setBookmarks(bookmarks)
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
    <Layout>
      <Layout.Content>
        <Typography.Title level={4}>All bookmarks</Typography.Title>
        <List
          itemLayout='vertical'
          dataSource={Array.isArray(bookmarks.results) ? bookmarks.results : []}
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
                <Button
                  type='primary'
                  danger
                  onClick={() => onRemoveBookmark(offer._id!)}
                >
                  Remove
                </Button>,
              ]}
              extra={
                <img
                  src={environment.baseImagesUrl + offer.images.featured}
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
    </Layout>
  )
}

export default Bookmarks
