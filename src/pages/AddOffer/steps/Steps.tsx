import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { Step } from '../AddOffer'
import { StepsWrapper, StepWrapper } from './Steps.styled'

interface ComponentInterface {
  steps: Step[]
  currentStep: number
}

const Steps: React.FC<ComponentInterface> = ({ steps, currentStep }) => {
  return (
    <StepsWrapper>
      {steps.map((step) => (
        <StepWrapper isDone={step.step <= currentStep} key={step.step}>
          {step.step >= currentStep ? (
            <span>{step.step}.</span>
          ) : (
            <BiCheck size={18} />
          )}
          <span>{step.text}</span>
        </StepWrapper>
      ))}
    </StepsWrapper>
  )
}

export default Steps
