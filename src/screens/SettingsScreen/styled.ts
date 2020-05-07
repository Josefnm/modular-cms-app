import styled from 'styled-components'
import { Form } from 'formik'
import colors from '../../styles/colors'

export const CenterContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const StyledForm = styled.div`
  background-color: ${colors.white};
  width: 700px;
`
