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
  position: fixed;
  top: 70px;
  height: 60px;
  justify-content: space-between;
  background-color: ${colors.grey7};
  border-bottom: ${colors.grey3} 1px solid;
`

export const HeaderPadding = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  padding: 0 25px;
`

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 133px;
`
