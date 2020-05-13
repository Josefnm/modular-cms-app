import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { CSSProperties } from 'react'
import { ButtonBase } from '../buttons'
import { textColors } from '../../styles/text'
import colors from '../../styles/colors'

const activeStyle: CSSProperties = {
  color: textColors.blue,
  borderBottom: `${textColors.blue} 5px solid`,
}

export const StyledLink = styled(NavLink).attrs({ activeStyle })`
  white-space: nowrap;
  margin: 10px;
  font-size: 25px;
  color: white;
  padding-top: 5px;
  border-bottom: transparent 5px solid;
  height: 60px;
  align-items: center;
  display: flex;
`

export const StyledButton = styled(ButtonBase)`
  margin: 10px;
  font-size: 25px;
  color: white;
  background: transparent;
  border-width: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: ${colors.blueDark};
  height: 70px;
  width: 100%;
  z-index: 100;
`

export const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
