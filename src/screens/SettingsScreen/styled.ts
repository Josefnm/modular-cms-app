import styled from 'styled-components'
import { Form } from 'formik'
import colors from '../../styles/colors'

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  background-color: ${colors.white};
  width: 700px;
`
