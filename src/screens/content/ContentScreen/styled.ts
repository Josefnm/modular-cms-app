import styled from 'styled-components'
import { ButtonBase } from '../../../components/buttons'
import colors from '../../../styles/colors'
import { HeaderPadding } from '../../../components/common'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonContainer = styled(HeaderPadding)`
  flex-direction: column;
`

export const MenuButton = styled(ButtonBase)`
  align-items: center;
  display: flex;
  padding: 10px 25px;
  background: white;
  color: black;
  border: 0;
  :hover {
    background-color: ${colors.grey7};
  }
`
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

export const MenuContainer = styled.div`
  width: 200px;
  margin-right: 52px;
`

export const TableContainer = styled.div`
  margin-top: 30px;
`
