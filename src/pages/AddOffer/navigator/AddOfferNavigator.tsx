import React from 'react'
import { Button, Wrapper } from './AddOfferNavigator.styled'

interface ComponentInterface {
  step: number
  maxStep: number
  onNextStep: (direction: 'previous' | 'next') => void
}

const AddOfferNavigator: React.FC<ComponentInterface> = ({
  step,
  maxStep,
  onNextStep,
}) => {
  return (
    <Wrapper step={step}>
      {step !== 1 && (
        <Button isBack onClick={() => onNextStep('previous')}>
          Previous
        </Button>
      )}
      <Button onClick={() => onNextStep('next')}>
        {step === maxStep ? 'Finish' : 'Next'}
      </Button>
    </Wrapper>
  )
}

export default AddOfferNavigator
