import { useState } from 'react'
import {
  Backdrop,
  ModalWrapper,
  ModalHeader,
  ModalHeading,
  IconWrapper,
  ModalContent,
  InputGroup,
  ModalFooter,
  Button,
} from './FiltersModal.styled'
import { MdOutlineClose } from 'react-icons/md'
import SelectInput from '../../../../components/SelectInput/SelectInput'
import { prices, area, rooms } from './Filters.values'

type ComponentType = {
  onClose: () => any
}

type Filters = {
  priceFrom?: string | number
  priceTo?: string | number
}

const FiltersModal: React.FC<ComponentType> = ({ onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalWrapper>
        <IconWrapper>
          <MdOutlineClose size={22} onClick={onClose} />
        </IconWrapper>
        <ModalHeader>
          <ModalHeading>Filters</ModalHeading>
        </ModalHeader>
        <ModalContent>
          <InputGroup>
            <SelectInput
              name='priceFrom'
              placeholder='Price from'
              values={prices}
            />
            <SelectInput
              name='priceTo'
              placeholder='Price to'
              values={prices}
            />
          </InputGroup>
          <InputGroup>
            <SelectInput
              name='areaFrom'
              placeholder='Area from'
              values={area}
            />
            <SelectInput name='areaTo' placeholder='Area to' values={area} />
          </InputGroup>
          <InputGroup>
            <SelectInput
              name='roomsFrom'
              placeholder='Rooms from'
              values={rooms}
            />
            <SelectInput name='roomsTo' placeholder='Rooms to' values={rooms} />
          </InputGroup>
        </ModalContent>
        <ModalFooter>
          <Button>Show offers</Button>
        </ModalFooter>
      </ModalWrapper>
    </>
  )
}

export default FiltersModal
