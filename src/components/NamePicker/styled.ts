import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 670px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`

export const FieldContainer = styled.div`
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 30px;
  flex: 1;
  display: flex;
  background-color: ${colors.white};
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`
