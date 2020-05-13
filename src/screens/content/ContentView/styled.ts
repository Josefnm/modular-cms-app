import styled from 'styled-components'
import { ButtonBase } from '../../../components/buttons'
import colors from '../../../styles/colors'
import { HeaderPadding } from '../../../components/common'

export const ButtonContainer = styled(HeaderPadding)`
  padding-right: 50px;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
`


export const TableContainer = styled.div`
  margin-top: 30px;
`
export const Container = styled.div`
  width: 70vw;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-height: 800px;
`

export const BodyContainer = styled.div`
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 30px;
  background-color: ${colors.white};
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  max-height: 70vh;
  overflow-y: auto;
`
