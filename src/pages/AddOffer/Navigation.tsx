import { Button, Space } from 'antd'
import React from 'react'

interface ComponentInterface {
  currentStep: number
  isEdit: boolean
  setCurrentStep: (prev: any) => void
  onAddOffer: () => void
  onEditOffer: () => void
}

const Navigation: React.FC<ComponentInterface> = ({
  currentStep,
  isEdit,
  setCurrentStep,
  onAddOffer,
  onEditOffer,
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
      {!isEdit && currentStep === 4 && (
        <Button type='primary' size='large' onClick={handleAction}>
          Finish
        </Button>
      )}

      {currentStep !== 4 && (
        <Button type='primary' size='large' onClick={handleAction}>
          Next
        </Button>
      )}
      {isEdit && currentStep === 4 && (
        <Button type='primary' size='large' onClick={() => onEditOffer()}>
          Edit
        </Button>
      )}
    </Space>
  )
}

export default Navigation
