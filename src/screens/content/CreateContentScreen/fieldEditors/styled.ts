import styled from 'styled-components'
import { ErrorMessage } from 'formik'
import colors from '../../../../styles/colors'

type LabelProps = {
  width?: number
}

export const Label = styled.label<LabelProps>`
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  width: inherit;
  border-left: ${colors.grey5} 3px solid;
  margin: 10px 0;
  padding: 0 15px;
  cursor: pointer;
`

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 5px;
  color: ${colors.redLight};
`
