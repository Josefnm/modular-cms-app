import styled from 'styled-components'

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
