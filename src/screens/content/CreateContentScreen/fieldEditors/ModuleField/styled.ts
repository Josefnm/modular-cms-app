import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.div`
  width: 670px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  background: white;
`
export const TableContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BorderContainer = styled.div`
  border: ${colors.grey4} 1px solid;
  padding: 5px 0 5px 10px;
`
