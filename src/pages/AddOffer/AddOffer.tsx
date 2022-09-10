import { Button, Layout, Modal, Space, Spin, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/AuthContext'
import { Offer } from '../../models/Offer.model'
import { OffersService } from '../../services/OffersService'
import Navigation from './Navigation'
import AdditionalInformation from './steps/AdditionalInformation'
import BasicInformation from './steps/BasicInformation'
import Facilities from './steps/Facilities'
import Images from './steps/Images'
import Localization from './steps/Localization'
import { initialOffer } from '../../config/steps.config'
import StepsIndicator from './StepsIndicator'

const AddOffer = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [offer, setOffer] = useState(initialOffer as Offer)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')

  const { id } = useParams()
  const { getToken } = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true)
  //       if (id) {
  //         const response = await OffersService.getOffer(id)
  //         setOffer(response.results as Offer)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, [id])

  const onAddOffer = async () => {
    try {
      setIsVisible(true)
      setIsLoading(true)
      const response = await OffersService.createOffer(offer, getToken())
      setMessage(response.msg)
      setOffer(response.offer)
    } catch (error: any) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const renderComponent = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <BasicInformation offer={offer} updateOffer={setOffer} />
      case 1:
        return <AdditionalInformation offer={offer} updateOffer={setOffer} />
      case 2:
        return <Facilities offer={offer} updateOffer={setOffer} />
      case 3:
        return <Images offer={offer} updateOffer={setOffer} />
      case 4:
        return <Localization offer={offer} updateOffer={setOffer} />
    }
  }

  return (
    <>
      <Layout style={{ padding: '50px', flexDirection: 'row' }}>
        <Layout.Content style={{ flex: 1 }}>
          <StepsIndicator currentStep={currentStep} />
        </Layout.Content>
        {!isLoading ? (
          <Layout.Content style={{ flex: 2 }}>
            <Layout.Content
              style={{
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '15px',
              }}
            >
              {renderComponent(currentStep)}
            </Layout.Content>
            <Layout.Content>
              <Navigation
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                onAddOffer={onAddOffer}
              />
            </Layout.Content>
          </Layout.Content>
        ) : (
          <Space align='center'>
            <Spin />
          </Space>
        )}
      </Layout>
      <Modal
        visible={isVisible}
        title='Offer created'
        onCancel={() => navigate('/')}
        footer={[
          <Button
            key='create'
            type='default'
            onClick={() => navigate('/offer/add')}
          >
            Create new offer
          </Button>,
          <Button
            key='navigate'
            type='primary'
            onClick={() => navigate(`/offers/${offer._id}`)}
          >
            Show your offer
          </Button>,
        ]}
      >
        <Space
          direction='vertical'
          style={{ width: '100%', alignItems: 'center' }}
        >
          {!isLoading ? (
            <>
              <FiCheckCircle size={25} color='#52c41a' />
              <Typography.Text>{message}</Typography.Text>
            </>
          ) : (
            <Spin />
          )}
        </Space>
      </Modal>
    </>
  )
}

export default AddOffer
