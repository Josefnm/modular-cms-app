import styled, { keyframes } from 'styled-components'
import { ButtonBase } from '../buttons'
import colors from '../../styles/colors'

const SlideIn = keyframes`
  0% { left: -350px; }

`

export const Container = styled.div`
  animation: ${SlideIn};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
`

const fadeIn = keyframes`
  0% { opacity: 0; }
`

export const Overlay = styled.div`
  animation: ${fadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  flex: 1;

  background-color: rgba(0, 0, 0, 0.5);
`

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  padding: 15px 15px 5px;
`

export const SideArea = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const NavBarButton = styled(ButtonBase)`
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  text-decoration: none;
  color: white;
  box-shadow: inset -1px 0 2px 0 rgba(0, 0, 0, 0.4), inset -2px 0 5px 0 rgba(0, 0, 0, 0.35);
  background-color: ${colors.blueExtraDark};
  border-width: 0;
  height: 100%;
`
