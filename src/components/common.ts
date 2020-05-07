import styled from 'styled-components'
import colors from '../styles/colors'

export const RowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`

export const CenteredRowContainer = styled(RowContainer)`
  justify-content: center;
  align-items: center;
`

export const ColumnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const ColumnContainerCentered = styled(ColumnContainer)`
  justify-content: center;
  align-items: center;
`

export const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${colors.grey7};
  border-bottom: ${colors.grey3} 1px solid;
`

export const HeaderPadding = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  padding: 10px 25px;
`
