import React, { useState } from 'react'
import { Offer } from '../../models/Offer.model'
import { AddOfferWrapper, StepsWrapper, Wrapper } from './AddOffer.styled'
import AddOfferNavigator from './navigator/AddOfferNavigator'
import BasicInformation from './steps/BasicInformation'
import Steps from './steps/Steps'
import Images from './steps/Images'

export interface Step {
  step: number
  text: string
}

const MAX_STEP = 5
const STEPS = [
  {
    step: 1,
    text: 'Basic information',
  },
  {
    step: 2,
    text: 'Facilities',
  },
  {
    step: 3,
    text: 'Images',
  },
  {
    step: 4,
    text: 'Localization',
  },
  {
    step: 5,
    text: 'Contact details',
  },
]

const AddOffer = () => {
  const [steps, setSteps] = useState(STEPS)
  const [currentStep, setCurrentStep] = useState(1)
  const [offerData, setOfferData] = useState<Offer>({
    title: 'Title of the offer',
  } as Offer)

  const setOffer = (data: { [s: string]: string }) => {
    for (const [key, value] of Object.entries(data)) {
      setOfferData({ ...offerData, [key]: value })
    }
  }

  const onNextStep = (direction: 'previous' | 'next') => {
    switch (direction) {
      case 'previous':
        setCurrentStep((prevStep) => prevStep - 1)
        break
      case 'next':
        setCurrentStep((prevStep) => prevStep + 1)
        break
    }
  }

  const renderComponent = (step: number) => {
    switch (step) {
      case 1:
        return <BasicInformation offer={offerData} setOffer={setOffer} />
      case 2:
        return <Images />
      case 3:
        return <Images />
    }
  }

  return (
    <Wrapper>
      <StepsWrapper>
        <Steps steps={steps} currentStep={currentStep} />
      </StepsWrapper>
      <AddOfferWrapper>
        {renderComponent(currentStep)}
        <AddOfferNavigator
          step={currentStep}
          maxStep={MAX_STEP}
          onNextStep={onNextStep}
        />
      </AddOfferWrapper>
    </Wrapper>
  )
}

export default AddOffer
