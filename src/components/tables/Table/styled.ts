import styled from 'styled-components'
import colors from '../../../styles/colors'

export const TableCell = styled.td`
  text-align: left;
  min-width: 12vw;
  font-weight: 500;
  font-size: 16px;
  margin: 0 10px;
  padding: 15px 15px;
  border-top: ${colors.grey4} 1px solid;
`

type HeaderProps = {
  isEmpty: boolean
}

export const HeaderTableCell = styled(TableCell)<HeaderProps>`
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: ${({ isEmpty }) => (isEmpty ? 5 : 0)}px;
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: ${({ isEmpty }) => (isEmpty ? 5 : 0)}px;
  }
`

export const TableHeader = styled.thead`
  min-height: 38px;
  background-color: ${colors.grey7};
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 5px;
  border: ${colors.grey4} 1px solid;
  border-top-width: 0;
  overflow: auto;
  flex:1;
`

type RowProps = {
  clickable?: boolean
}

export const TableRow = styled.tr<RowProps>`
  :hover {
    ${({ clickable }) => clickable && `background-color: ${colors.grey7};`}
  }
`
