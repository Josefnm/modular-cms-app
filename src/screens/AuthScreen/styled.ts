import styled from 'styled-components'
import { Form } from 'formik'
import { ColumnContainer, RowContainer } from '../../components/common'
import { BlueSquareButton } from '../../components/buttons'
import colors from '../../styles/colors'

export const StyledForm = styled(Form)`
  width: 300px;
`

export const FormContainer = styled(ColumnContainer)`
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
  background: ${colors.grey7};
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ConfirmButton = styled(BlueSquareButton)`
  width: 100%;
`
