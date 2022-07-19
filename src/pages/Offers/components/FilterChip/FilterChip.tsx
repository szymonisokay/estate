import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { Chip, ChipName, ChipValue, IconWrapper } from './FilterChip.styled'

type ComponentType = {
  name: string
  value: string | number
  onDelete: (name: string) => void
}

const FilterChip: React.FC<ComponentType> = ({ name, value, onDelete }) => {
  const transformedValue = (
    <span>
      {value}m<sup>2</sup>
    </span>
  )

  return (
    <>
      {!!value && (
        <Chip>
          <ChipName>{name}:</ChipName>
          <ChipValue>
            {name === 'Max area' || name === 'Min area'
              ? transformedValue
              : value}
          </ChipValue>
          <IconWrapper onClick={() => onDelete(name)}>
            <MdOutlineClose />
          </IconWrapper>
        </Chip>
      )}
    </>
  )
}

export default FilterChip
