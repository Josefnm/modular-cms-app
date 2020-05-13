import React, { FC, useMemo } from 'react'
import { HeaderTableCell, StyledTable, TableCell, TableRow, TableHeader } from './styled'

type Props = {
  headerValues: string[]
  bodyValues: { onClick?: () => void; values: string[] }[]
}

const Table: FC<Props> = ({ headerValues, bodyValues }) => {
  const tableBody = useMemo(() => {
    return bodyValues.map((rowValues, index) => (
      <TableRow
        key={rowValues.values[0] + 1}
        onClick={rowValues.onClick}
        clickable={!!rowValues.onClick}
      >
        {rowValues.values.map((value, index2) => (
          <TableCell key={value + 2}>{value}</TableCell>
        ))}
      </TableRow>
    ))
  }, [bodyValues])

  const tableHead = useMemo(() => {
    return headerValues.map(value => (
      <HeaderTableCell key={value} isEmpty={tableBody.length === 0}>
        {value}
      </HeaderTableCell>
    ))
  }, [headerValues, tableBody])

  return (
    <StyledTable>
      <TableHeader>
        <tr>{tableHead}</tr>
      </TableHeader>
      <tbody>{tableBody}</tbody>
    </StyledTable>
  )
}

export default Table
