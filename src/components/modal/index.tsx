import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Container } from './styled'

type OwnProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
type Props = OwnProps

const Modal: FunctionComponent<Props> = ({ isOpen, children, setIsOpen }) => {
  if (!isOpen) return null

  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation()

  return (
    <Container onClick={() => setIsOpen(false)}>
      <div onClick={stopPropagation}>{children}</div>
    </Container>
  )
}

export default Modal
