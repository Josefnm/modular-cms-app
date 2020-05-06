import styled from 'styled-components'
import { Field } from 'formik'
import colors from '../../../../../styles/colors'

export const StyledField = styled(Field)`
  padding: 0 5px;
  height: 25px;
  font-size: 16px;
  margin-top: 10px;
  resize: vertical;
  border: 1px solid ${colors.grey4};
`
