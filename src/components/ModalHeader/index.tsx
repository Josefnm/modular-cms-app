import React, { FunctionComponent } from 'react'

import { Heading3 } from '../../styles/text'
import { Header } from './styled'

const ModalHeader: FunctionComponent = ({ children }) => {
  return (
    <Header>
      <Heading3 marginLeft={30}>{children}</Heading3>
    </Header>
  )
}

export default ModalHeader
