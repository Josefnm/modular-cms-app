import styled from 'styled-components'
import { Form } from 'formik'
import { ColumnContainer, RowContainer } from '../../components/containers'
import { BlueSquareButton } from '../../components/buttons'
import colors from '../../styles/colors'

export const StyledForm = styled(Form)`
  width: 300px;
`

export const FormContainer = styled(ColumnContainer)`
  margin-top: 50px;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 4px;
  border: ${colors.grey4} 1px solid;
`

export const LinkButtonContainer = styled(RowContainer)`
  width: 300px;

  justify-content: flex-end;
`

export const Container = styled(ColumnContainer)`
  background: ${colors.grey6};
  align-items: center;
  flex: 1;
`

export const ConfirmButton = styled(BlueSquareButton)`
  width: 100%;
`
