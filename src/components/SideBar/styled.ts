import styled, { keyframes } from 'styled-components'
import { ButtonBase } from '../buttons'

const SlideIn = keyframes`
  0% { left: -350px; }

`

export const Container = styled.div`
  animation: ${SlideIn};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  position: absolute;
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
  background: black;
  opacity: 0.5;
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
  background: white;
`

export const NavBarButton = styled(ButtonBase)`
  min-width: 200px;
  text-decoration: none;
  color: white;
  box-shadow: inset -1px 0 2px 0 rgba(0, 0, 0, 0.4), inset -2px 0 5px 0 rgba(0, 0, 0, 0.35);
  background-color: #192532;
  border-width: 0;
  height: 100%;
`
