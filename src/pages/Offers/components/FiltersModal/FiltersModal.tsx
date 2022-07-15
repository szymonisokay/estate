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
import SelectInput, {
  Value,
} from '../../../../components/SelectInput/SelectInput'
import { PriceFrom } from './Filters.types'

type ComponentType = {
  onClose: () => any
}

type Filters = {
  priceFrom?: Value
  priceTo?: Value
}

const FiltersModal: React.FC<ComponentType> = ({ onClose }) => {
  const [filters, setFilters] = useState<null | Filters>(null)

  const onValueChange = (name: string, value: Value) => {
    setFilters({ ...filters, [name]: value })
  }

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
              values={PriceFrom}
              onValueChange={onValueChange}
            />
            <SelectInput
              name='priceTo'
              placeholder='Price to'
              values={PriceFrom}
              onValueChange={onValueChange}
            />
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
