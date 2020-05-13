import styled from 'styled-components'
import colors from '../../../styles/colors'
import { ButtonBase } from '../../buttons'

export const MenuButton = styled(ButtonBase)`
  background-color: white;
  border: 0;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  flex: 1;
  :hover {
    background-color: ${colors.blueLight};
  }
`
