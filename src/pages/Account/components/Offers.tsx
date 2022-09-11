import { Button, Layout, List, Modal, Space, Spin, Tag, Typography } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { environment } from '../../../environment/environment'
import { transformNumber } from '../../../helpers/TransformNumber'
import { OfferType } from '../../../models/Offer.model'
import { OffersService } from '../../../services/OffersService'

const Offers = () => {
  const [offers, setOffers] = useState<OfferType>({} as OfferType)
  const [offerToDelete, setOfferToDelete] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingDeleteOffer, setIsLoadingDeleteOffer] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { user, getToken } = useAuth()

  const onDeleteOffer = async () => {
    try {
      setIsLoadingDeleteOffer(true)
      const response = await OffersService.deleteOffer(
        offerToDelete,
        getToken()
      )

      toast.error(response.msg)
      setOffers(response.offers)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingDeleteOffer(false)
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        if (user) {
          const offers = await OffersService.getUserOffers(user.id, getToken())
          setOffers(offers)
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
    <>
      <Layout>
        <Layout.Content>
          <Typography.Title level={4}>All offers</Typography.Title>
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
                  <Button type='primary'>
                    <Link to={`/offer/edit/${offer._id}`}>Edit</Link>
                  </Button>,
                  <Button
                    type='primary'
                    danger
                    onClick={() => {
                      setIsModalOpen(true)
                      setOfferToDelete(offer._id!)
                    }}
                  >
                    Delete
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

      <Modal
        visible={isModalOpen}
        title='Delete offer'
        onOk={onDeleteOffer}
        onCancel={() => setIsModalOpen(false)}
        confirmLoading={isLoadingDeleteOffer}
        footer={[
          <Button key='cancel' onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button key='delete' type='primary' danger onClick={onDeleteOffer}>
            Delete
          </Button>,
        ]}
      >
        <Space direction='vertical' align='center' style={{ width: '100%' }}>
          <Typography.Text strong>
            Are you sure you want to delele this offer?
          </Typography.Text>
          <Typography.Text>This action will be irreversible!</Typography.Text>
        </Space>
      </Modal>
    </>
  )
}

export default Offers
