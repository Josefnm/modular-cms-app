import styled from 'styled-components'
import { ErrorMessage, Form } from 'formik'
import colors from '../../../styles/colors'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderPadding = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  padding: 10px 25px;
`

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${colors.redLight};
`
