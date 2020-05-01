import React, { FunctionComponent } from 'react'
import { Label, StyledErrorMessage, StyledField } from './styled'

type OwnProps = {
  name: string
  width?: number
  label?: string
  type: string
  placeholder?: string
  component?: string
}
type Props = OwnProps

const FormField: FunctionComponent<Props> = ({
  name,
  label,
  type,
  placeholder,
  width,
  component = 'input',
}) => {
  return (
    <Label htmlFor={name} width={width}>
      {label}
      <StyledField
        id={name}
        name={name}
        type={type}
        placeholer={placeholder}
        component={component}
      />
      <StyledErrorMessage name={name} component="div" />
    </Label>
  )
}

export default FormField
