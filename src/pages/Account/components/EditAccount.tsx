import {
  Button,
  Card,
  Col,
  Divider,
  Input,
  Layout,
  Modal,
  Row,
  Space,
  Spin,
  Statistic,
  Typography,
  Upload,
} from 'antd'
import { useEffect, useState } from 'react'
import { BiEnvelope, BiLockAlt, BiUser } from 'react-icons/bi'
import { RiCoupon2Line } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/auth/AuthContext'
import { ChangePassword } from '../../../models/FormData.model'
import { User } from '../../../models/Offer.model'
import { Wallet } from '../../../models/Wallet.model'
import { UsersService } from '../../../services/UsersService'
import { WalletService } from '../../../services/WalletService'

const EditAccount = () => {
  const [user, setUser] = useState<User>({} as User)
  const [wallet, setWallet] = useState<Wallet>({} as Wallet)
  const [isLoading, setIsLoading] = useState(false)
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false)
  const [isLoadingChangePassword, setIsLoadingChangePassword] = useState(false)
  const [isAddCreditsModalOpen, setIsAddCreditsModalOpen] = useState(false)
  const [isLoadingAddCredits, setIsLoadingAddCredits] = useState(false)
  const [passwords, setPassword] = useState<ChangePassword>(
    {} as ChangePassword
  )
  const [coupon, setCoupon] = useState<string>('')

  const { user: authUser, getToken, updateUser } = useAuth()

  const onSave = async () => {
    try {
      setIsLoading(true)
      const { msg, user: changedUser } = await UsersService.updateUser(
        user,
        getToken()
      )
      toast.success(msg)
      setUser(changedUser)
      updateUser(changedUser)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const onChangePassword = async () => {
    try {
      setIsLoadingChangePassword(true)
      const { msg } = await UsersService.changePassword(
        user._id,
        passwords,
        getToken()
      )
      toast.success(msg)
      setIsChangePasswordModalOpen(false)
    } catch (error: any) {
      toast.error(error.response.data.message)
    } finally {
      setIsLoadingChangePassword(false)
    }
  }

  const onAddCredits = async () => {}

  const onModalCancel = (selection: 'credits' | 'password') => {
    switch (selection) {
      case 'credits':
        setIsAddCreditsModalOpen(false)
        break
      case 'password':
        setIsChangePasswordModalOpen(false)
        break
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        if (authUser) {
          const response = await UsersService.getUser(authUser.id, getToken())
          setUser(response)

          const wallet = await WalletService.getWalletInfo(getToken())
          setWallet(wallet)
        }
      } catch (error: any) {
        console.log(error.response.data.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [authUser, getToken])

  if (isLoading) {
    return (
      <Space style={{ width: '100%', justifyContent: 'center' }}>
        <Spin />
      </Space>
    )
  }

  return (
    <>
      <Layout style={{ rowGap: '30px' }}>
        <Layout.Content>
          <Typography.Title level={4}>Account details</Typography.Title>
          <Row gutter={24}>
            <Col span={12}>
              <Space direction='vertical' style={{ width: '70%' }}>
                <Space
                  direction='vertical'
                  style={{ width: '100%', rowGap: '2px' }}
                >
                  <Typography.Text type='secondary'>Username</Typography.Text>
                  <Input
                    type='text'
                    value={user.username}
                    prefix={<BiUser />}
                    size='large'
                    onChange={(e) =>
                      setUser((user) => {
                        return {
                          ...user,
                          username: e.target.value,
                        }
                      })
                    }
                  />
                </Space>
                <Space
                  direction='vertical'
                  style={{ width: '100%', rowGap: '2px' }}
                >
                  <Typography.Text type='secondary'>Email</Typography.Text>
                  <Input
                    type='email'
                    value={user.email}
                    disabled
                    prefix={<BiEnvelope />}
                    size='large'
                  />
                </Space>
                <Space
                  split={<Divider type='vertical' />}
                  style={{ marginTop: '20px' }}
                >
                  <Button type='primary' size='large' onClick={onSave}>
                    Save
                  </Button>
                  <Button
                    size='large'
                    onClick={() => setIsChangePasswordModalOpen(true)}
                  >
                    Change password
                  </Button>
                </Space>
              </Space>
            </Col>
            <Col span={12}>
              <Upload />
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Content>
          <Typography.Title level={4}>Account balance</Typography.Title>
          <Card style={{ width: 'max-content' }}>
            <Statistic
              title='Available credits'
              value={wallet.wallet_points}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
          <Button
            type='primary'
            size='large'
            style={{ marginTop: '20px' }}
            onClick={() => setIsAddCreditsModalOpen(true)}
          >
            Recharge credits
          </Button>
        </Layout.Content>
      </Layout>

      <Modal
        visible={isChangePasswordModalOpen}
        title='Change password'
        onOk={onChangePassword}
        onCancel={() => onModalCancel('password')}
        confirmLoading={isLoadingChangePassword}
      >
        <Space direction='vertical'>
          <Space direction='vertical' style={{ rowGap: '2px' }}>
            <Typography.Text type='secondary'>Current password</Typography.Text>
            <Input
              type='password'
              value={passwords.password}
              prefix={<BiLockAlt />}
              size='large'
              onChange={(e) =>
                setPassword((passwords) => {
                  return {
                    ...passwords,
                    password: e.target.value,
                  }
                })
              }
            />
          </Space>
          <Space direction='vertical' style={{ rowGap: '2px' }}>
            <Typography.Text type='secondary'>New password</Typography.Text>
            <Input
              type='password'
              value={passwords.changedPassword}
              prefix={<BiLockAlt />}
              size='large'
              onChange={(e) =>
                setPassword((passwords) => {
                  return {
                    ...passwords,
                    changedPassword: e.target.value,
                  }
                })
              }
            />
          </Space>
        </Space>
      </Modal>

      <Modal
        visible={isAddCreditsModalOpen}
        title='Add credits'
        onOk={onAddCredits}
        onCancel={() => onModalCancel('credits')}
        confirmLoading={isLoadingAddCredits}
      >
        <Space direction='vertical'>
          <Typography.Text>
            Enter coupon to add credits to your account.
          </Typography.Text>
          <Space direction='vertical' style={{ rowGap: '2px' }}>
            <Typography.Text type='secondary'>Coupon</Typography.Text>
            <Input
              type='text'
              value={coupon}
              size='large'
              prefix={<RiCoupon2Line />}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </Space>
        </Space>
      </Modal>
    </>
  )
}

export default EditAccount
