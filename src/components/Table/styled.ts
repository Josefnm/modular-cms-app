import styled from 'styled-components'
import colors from '../../styles/colors'

export const TableCell = styled.td`
  text-align: left;
  min-width: 200px;
  font-weight: 500;
  font-size: 16px;
  margin: 0 10px;
  padding: 15px 15px;
  border-top: ${colors.grey4} 1px solid;
`

export const HeaderTableCell = styled(TableCell)`
  &:last-child {
    border-top-right-radius: 5px;
  }
  &:first-child {
    border-top-left-radius: 5px;
  }
`

export const TemplateTableHeader = styled.thead`
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
`

type Props = {
  clickable?: boolean
}

export const TableRow = styled.tr<Props>`
  :hover {
    ${({ clickable }) => clickable && `background-color: ${colors.grey7};`}
  }
`
