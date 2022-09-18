import {
  Button,
  Card,
  Image,
  Input,
  Layout,
  Space,
  Spin,
  Typography,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Checkout as CheckoutModel } from '../config/checkout'
import { useAuth } from '../contexts/auth/AuthContext'
import { transformNumber } from '../helpers/TransformNumber'
import { Offer } from '../models/Offer.model'
import { Wallet } from '../models/Wallet.model'
import { OffersService } from '../services/OffersService'
import { TransactionService } from '../services/TransactionService'
import { WalletService } from '../services/WalletService'

const Checkout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [offer, setOffer] = useState<Offer>({} as Offer)
  const [wallet, setWallet] = useState<Wallet>({} as Wallet)
  const [coupon, setCoupon] = useState<string>('')

  const location = useLocation()
  const navigate = useNavigate()
  const { getToken } = useAuth()

  const { id } = location.state as CheckoutModel

  const onAddCoupon = async () => {
    try {
      const response = await WalletService.addCredits(coupon, getToken())
      toast.success(response.msg)
      setWallet(response.wallet)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }

    setCoupon('')
  }

  const onPurchase = async () => {
    try {
      const response = await TransactionService.createTransaction(
        offer._id!,
        getToken()
      )
      toast.success(response.msg)
      setWallet(response.wallet)

      setTimeout(() => {
        navigate('/account')
      }, 1500)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const offer = await OffersService.getOffer(id, getToken())
        setOffer(offer.results as Offer)

        const wallet = await WalletService.getWalletInfo(getToken())
        setWallet(wallet)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id, getToken])

  if (isLoading) {
    return <Spin />
  }

  if (
    !isLoading &&
    Object.keys(offer).length === 0 &&
    Object.keys(wallet).length === 0
  ) {
    return <Typography.Text>offer not found</Typography.Text>
  }

  return (
    <Layout style={{ padding: '20px 50px' }}>
      <Layout.Content style={{ flex: 1 }}>
        <Space align='start' size='large'>
          <Image
            src={offer.images.featured}
            alt={offer.title}
            style={{ width: '350px', height: '250px', objectFit: 'cover' }}
          />
          <Space direction='vertical'>
            <Typography.Title level={4}>{offer.title}</Typography.Title>
            <Typography.Text type='secondary'>
              {offer.description.slice(0, 200)}...
            </Typography.Text>
          </Space>
        </Space>
      </Layout.Content>
      <Layout.Content style={{ flex: 8 }}>
        <Card>
          <Space
            style={{
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
            align='start'
          >
            <Card>
              <Typography.Title level={5}>
                Add credits to your account
              </Typography.Title>
              <Typography.Text>
                Current balance:{' '}
                <Typography.Text strong>
                  {transformNumber(wallet.wallet_points)} C
                </Typography.Text>
              </Typography.Text>
              <Input.Group compact style={{ marginTop: '20px' }}>
                <Input
                  style={{ width: '200px' }}
                  placeholder='Coupon'
                  size='large'
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button type='primary' size='large' onClick={onAddCoupon}>
                  Recharge
                </Button>
              </Input.Group>
            </Card>
            <Card>
              <Space
                style={{ width: '200px', justifyContent: 'space-between' }}
              >
                <Typography.Text strong>Offer price: </Typography.Text>
                <Typography.Text>
                  {transformNumber(offer.price!)} C
                </Typography.Text>
              </Space>
            </Card>
          </Space>
          <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Button
              type='primary'
              size='large'
              // disabled={offer.price > wallet.wallet_points}
              onClick={onPurchase}
            >
              Purchase
            </Button>
          </Space>
        </Card>
      </Layout.Content>
    </Layout>
  )
}

export default Checkout
