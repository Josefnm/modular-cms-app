import styled from 'styled-components'
import { Form } from 'formik'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 670px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`

export const FieldContainer = styled.div`
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 30px;
  flex: 1;
  display: flex;
  background-color: ${colors.white};
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  padding-bottom: 30px;
  background-color: white;
  display: flex;
`

export const StyledForm = styled(Form)`
  width: 100%;
`
