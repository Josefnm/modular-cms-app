import React, { FunctionComponent, useMemo } from 'react'
import { HeaderTableCell, StyledTable, TableCell, TableRow, TemplateTableHeader } from './styled'

type Props = {
  headerValues: string[]
  bodyValues: { onClick?: () => void; values: string[] }[]
}

const Table: FunctionComponent<Props> = ({ headerValues, bodyValues }) => {

  const tableBody = useMemo(() => {
    return bodyValues.map(rowValues => (
      <TableRow
        key={rowValues.values[0]}
        onClick={rowValues.onClick}
        clickable={!!rowValues.onClick}
      >
        {rowValues.values.map(value => (
          <TableCell key={value}>{value}</TableCell>
        ))}
      </TableRow>
    ))
  }, [bodyValues])

  const tableHead = useMemo(() => {
    return headerValues.map(value => <HeaderTableCell key={value}>{value}</HeaderTableCell>)
  }, [headerValues])
  return (
    <StyledTable>
      <TemplateTableHeader>
        <tr>{tableHead}</tr>
      </TemplateTableHeader>
      <tbody>{tableBody}</tbody>
    </StyledTable>
  )
}

export default Table
