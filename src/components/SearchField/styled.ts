import styled from 'styled-components'
import colors from '../../styles/colors'

export const Header = styled.div`
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  width: 100%;
  height: 80px;
  background-color: ${colors.grey7};
  border-bottom: ${colors.grey3} 1px solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
