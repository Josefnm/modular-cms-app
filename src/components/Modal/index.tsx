import React, { Dispatch, FC, SetStateAction } from 'react'
import { Container } from './styled'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onClose?: () => any
}

const Modal: FC<Props> = ({ isOpen, children, setIsOpen, onClose }) => {
  if (!isOpen) return null

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation()

  const closeModal = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }
  return (
    <div style={{ zIndex: 200 }}>
      <Container onClick={closeModal}>
        <div onClick={stopPropagation}>{children}</div>
      </Container>
    </div>
  )
}

export default Modal
