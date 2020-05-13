import React, { FC } from 'react'
import { Label, StyledErrorMessage } from '../styled'
import { Heading5 } from '../../../../../styles/text'
import { StyledField } from './styled'

type Props = {
  name: string
  label?: string
}

const StringField: FC<Props> = ({ name, label }) => {
  return (
    <Label htmlFor={name}>
      <Heading5 grey>{label || name}</Heading5>
      <StyledField id={name} name={name} type="text" />
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default StringField
