import React, { FC } from 'react'
import { Field } from 'formik'
import { StyledErrorMessage } from '../styled'
import { Heading5 } from '../../../../../styles/text'
import { Container, RadioContainer, RadioLabel } from './styled'

type Props = {
  name: string
  label?: string
}

const BoolField: FC<Props> = ({ name, label }) => {
  return (
    <Container>
      <Heading5 grey marginBottom={5}>
        {label || name}
      </Heading5>
      <RadioContainer>
        <RadioLabel>
          <Heading5 marginRight={5}>yes</Heading5>
          <Field type="radio" name={name} value="true" id="true" />
        </RadioLabel>
        <RadioLabel>
          <Heading5 marginRight={5}>no</Heading5>
          <Field type="radio" name={name} value="false" id="false" />
        </RadioLabel>
      </RadioContainer>
      <StyledErrorMessage name={name} component="div" />
    </Container>
  )
}

export default BoolField
