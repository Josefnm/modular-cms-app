import styled from 'styled-components'
import colors from '../../../styles/colors'

export const NameContainer = styled.div`
  background-color: ${colors.grey5};
  padding: 8px 16px;
  text-align: center;
  display: flex;
  align-items: center;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`

export const MenuContainer = styled.div``

type Props = {
  isOpen: boolean
}

export const Menu = styled.div<Props>`
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
