import React, { FC } from 'react'
import { Label, StyledErrorMessage, StyledField } from './styled'
import { Heading5 } from '../../styles/text'

type Props = {
  name: string
  width?: number
  label?: string
  type: string
  placeholder?: string
  component?: string
}

const FormikField: FC<Props> = ({ name, label, type, placeholder, width, component = 'input' }) => {
  return (
    <Label htmlFor={name} width={width}>
      {label && <Heading5 marginTop={10}>{label}</Heading5>}
      <StyledField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        component={component}
      />
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default FormikField
