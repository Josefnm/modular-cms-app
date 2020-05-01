import styled from 'styled-components'
import { ErrorMessage, Form } from 'formik'
import colors from '../../../styles/colors'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${colors.grey6};
  border-bottom: ${colors.grey3} 1px solid;
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
