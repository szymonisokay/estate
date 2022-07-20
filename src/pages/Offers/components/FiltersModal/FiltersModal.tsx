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
  Text,
} from './FiltersModal.styled'
import { MdOutlineClose } from 'react-icons/md'
import SelectInput from '../SelectInput/SelectInput'
import { inputs } from './Filters.values'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../../../../features/settings/settingsSlice'
import { useState } from 'react'

type ComponentType = {
  onClose: () => any
}

const FiltersModal: React.FC<ComponentType> = ({ onClose }) => {
  const [currentlyOpen, setCurrentlyOpen] = useState('')

  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(clearFilters())
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
            {inputs?.map((input) => (
              <SelectInput
                key={input.name}
                name={input.name}
                placeholder={input.placeholder}
                values={input.values}
                currentlyOpen={currentlyOpen}
                setCurrentlyOpen={setCurrentlyOpen}
              />
            ))}
          </InputGroup>
        </ModalContent>
        <ModalFooter>
          <Text onClick={clearAll}>Clear all filters</Text>
          <Button>Show offers</Button>
        </ModalFooter>
      </ModalWrapper>
    </>
  )
}

export default FiltersModal
