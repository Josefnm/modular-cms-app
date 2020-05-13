import React, { FC, useMemo } from 'react'
import { HeaderTableCell, StyledTable, TableCell, TableHeader, TableRow } from '../Table/styled'

type Props = {
  headerValues: string[]
  bodyValues: { onClick?: () => void; values: JSX.Element[] }[]
}

const ElementTable: FC<Props> = ({ headerValues, bodyValues }) => {
  const tableBody = useMemo(() => {
    return bodyValues.map(rowValues => (
      <TableRow
        key={rowValues.values[0].key}
        onClick={rowValues.onClick}
        clickable={!!rowValues.onClick}
      >
        {rowValues.values.map(value => (
          <TableCell key={value.key}>{value}</TableCell>
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

export default ElementTable
