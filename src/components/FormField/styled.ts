import styled from 'styled-components'
import { ErrorMessage, Field } from 'formik'
import colors from '../../styles/colors'


type LabelProps = {
  width?: number
}

export const Label = styled.label<LabelProps>`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 10px;
  ${({ width }) => width && `width:${width}px`}
`

export const StyledField = styled(Field)`
  padding: 0;
  height: ${({ component }) => (component === 'textarea' ? 100 : 25)}px;
  font-size: 16px;
  margin: 10px 0;
  width: 100%;
  resize: vertical;
  border: 1px solid ${colors.grey4};
`

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${colors.redLight};
`
