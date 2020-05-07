import styled from 'styled-components'
import { ErrorMessage, Form } from 'formik'
import colors from '../../../styles/colors'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${colors.redLight};
`
