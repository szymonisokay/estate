import { Button, Space } from 'antd'
import React from 'react'

interface ComponentInterface {
  currentStep: number
  setCurrentStep: (prev: any) => void
  onAddOffer: () => void
}

const Navigation: React.FC<ComponentInterface> = ({
  currentStep,
  setCurrentStep,
  onAddOffer,
}) => {
  const handleAction = () => {
    if (currentStep === 4) {
      onAddOffer()
      return
    }

    setCurrentStep((prev: number) => prev + 1)
  }

  return (
    <Space
      direction='horizontal'
      style={{
        width: '100%',
        justifyContent: currentStep === 0 ? 'flex-end' : 'space-between',
        marginTop: '20px',
      }}
    >
      {currentStep > 0 && (
        <Button
          type='default'
          size='large'
          onClick={() => setCurrentStep((prev: number) => prev - 1)}
        >
          Previous
        </Button>
      )}
      <Button type='primary' size='large' onClick={handleAction}>
        {currentStep === 4 ? 'Finish' : 'Next'}
      </Button>
    </Space>
  )
}

export default Navigation
