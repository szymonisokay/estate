import React from 'react'

interface ComponentInterface {
  labelText: string
  value: boolean
  onChange: (e: any) => void
}

const Checkbox: React.FC<ComponentInterface> = ({
  labelText,
  value,
  onChange,
}) => {
  return (
    <label className='container'>
      {labelText}
      <input type='checkbox' checked={value || false} onChange={onChange} />
      <span className='checkmark'></span>
    </label>
  )
}

export default Checkbox
