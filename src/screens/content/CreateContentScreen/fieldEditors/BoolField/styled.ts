import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  width: inherit;
  border-left: ${colors.grey5} 3px solid;
  margin: 10px 0;
  padding: 0 15px;
`

export const RadioLabel = styled.label`
  cursor: pointer;
  margin-right: 10px;
  flex-direction: row;
  display: flex;
`

export const RadioContainer = styled.div`
  flex-direction: row;
  display: flex;
`
