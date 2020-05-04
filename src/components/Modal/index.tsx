import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Container } from './styled'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onClose?: () => any
}

const Modal: FunctionComponent<Props> = ({ isOpen, children, setIsOpen, onClose }) => {
  if (!isOpen) return null

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation()

  const closeModal = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }
  return (
    <Container onClick={closeModal}>
      <div onClick={stopPropagation}>{children}</div>
    </Container>
  )
}

export default Modal
