import { Steps } from 'antd'
import React from 'react'

const StepsIndicator: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const steps = [
    {
      key: 1,
      title: 'Basic information',
      description: 'Area size and price',
    },
    {
      key: 2,
      title: 'Additional information',
      description: 'More specific information',
    },
    {
      key: 3,
      title: 'Facilities',
      description: 'Choose your facilities',
    },
    {
      key: 4,
      title: 'Images',
      description: 'Add images of your estate',
    },
    {
      key: 5,
      title: 'Localization',
      description: 'More details about localiztion',
    },
  ]

  return (
    <Steps direction='vertical' current={currentStep}>
      {steps.map((step) => (
        <Steps.Step
          key={step.key}
          title={step.title}
          description={step.description}
        />
      ))}
    </Steps>
  )
}

export default StepsIndicator
