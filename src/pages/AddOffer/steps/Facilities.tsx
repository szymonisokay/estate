import { Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import React from 'react'
import { facilitiesType, StepsComponentInterface } from './steps.config'

const Facilities: React.FC<StepsComponentInterface> = ({
  offer,
  updateOffer,
}) => {
  const onChange = (checkedValues: CheckboxValueType[]) => {
    let values: string[] = []

    for (const value of checkedValues) {
      values.push(value.toString())
    }

    updateOffer((offer) => {
      return {
        ...offer,
        facilities: values,
      }
    })
  }

  return (
    <Checkbox.Group
      options={facilitiesType}
      onChange={onChange}
      value={offer.facilities}
      style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}
    />
  )
}

export default Facilities
