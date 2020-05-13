import styled from 'styled-components'
import colors from '../../styles/colors'

type Props = {
  isOpen: boolean
}

export const MenuContainer = styled.div<Props>`
  width: 200px;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  background: white;
  border: ${({ isOpen }) => (isOpen ? `${colors.grey6} 1px solid` : 0)};
  overflow-x: auto;
  max-height: 600px;
`
