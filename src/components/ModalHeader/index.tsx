import React, { FC } from 'react'

import { Heading3 } from '../../styles/text'
import { Header } from './styled'

const ModalHeader: FC = ({ children }) => {
  return (
    <Header>
      <Heading3 marginLeft={30}>{children}</Heading3>
    </Header>
  )
}

export default ModalHeader
