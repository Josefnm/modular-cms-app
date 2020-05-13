import styled from 'styled-components'
import colors from '../../styles/colors'
import { ButtonBase } from '../buttons'

export const SearchInput = styled.input`
  padding: 0 5px;
  height: 34px;
  font-size: 16px;
  border: 1px solid ${colors.grey4};
  border-radius: 3px;
  flex: 1;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

export const MenuButton = styled(ButtonBase)`
  background-color: white;
  border: 0;
  display: flex;
  flex-direction: row;
  flex: 1;
  :hover {
    background-color: ${colors.blueLight};
  }
`
