import { Layout } from 'antd'
import { useState } from 'react'
import { Offer } from '../../models/Offer.model'
import Navigation from './Navigation'
import AdditionalInformation from './steps/AdditionalInformation'
import BasicInformation from './steps/BasicInformation'
import Facilities from './steps/Facilities'
import Images from './steps/Images'
import Localization from './steps/Localization'
import { initialOffer } from './steps/steps.config'
import StepsIndicator from './StepsIndicator'

const AddOffer = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [offer, setOffer] = useState(initialOffer as Offer)

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
        return <Localization />
    }
  }

  return (
    <Layout style={{ padding: '50px', flexDirection: 'row' }}>
      <Layout.Content style={{ flex: 1 }}>
        <StepsIndicator currentStep={currentStep} />
      </Layout.Content>
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
          />
        </Layout.Content>
      </Layout.Content>
    </Layout>
  )
}

export default AddOffer
