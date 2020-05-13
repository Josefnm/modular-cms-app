import styled from 'styled-components'
import { Form } from 'formik'
import colors from '../../styles/colors'
import { RowContainer } from '../common'

export const Container = styled.div`
  width: 670px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`

export const StyledForm = styled(Form)`
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 30px;
  background-color: ${colors.white};
`

export const ButtonContainer = styled(RowContainer)`
  margin-top: 16px;
`
