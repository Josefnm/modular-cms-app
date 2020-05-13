import styled from 'styled-components'
import colors from '../../styles/colors'
import { RowContainer } from '../common'

export const Container = styled.div`
  width: 670px;
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
`

export const TableContainer = styled.div`
  height: 50vh;
  overflow-y: scroll;
`

export const ButtonContainer = styled(RowContainer)`
  margin-top: 15px;
`
