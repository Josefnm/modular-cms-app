import styled from 'styled-components'
import colors from '../styles/colors'

type props = {
  margin?: string
  width?: number
}

export const ButtonBase = styled.button<props>`
  white-space: nowrap;
  padding: 0;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.75 : 1)};
  ${({ width }) => width && `width:${width}px`};
  :focus {
    outline: none;
  }
`

export const SquareButton = styled(ButtonBase)<props>`
  border-radius: 3px;
  padding: 8px 16px;
  ${({ margin }) => margin && `margin: ${margin};`};
  border-color: ${colors.grey4};
  background-color: ${colors.grey5};
  color: ${colors.grey2};
  font-size: 16px;
  :hover {
    background-color: ${colors.grey4};
  }
`

export const GreenSquareButton = styled(SquareButton)<props>`
  border-color: ${colors.greenDark};
  background-color: ${colors.greenLight};
  color: ${colors.grey6};
  :hover {
    background-color: ${colors.greenDark};
  }
`

export const RedSquareButton = styled(SquareButton)<props>`
  border-color: ${colors.redDark};
  background-color: ${colors.redLight};
  color: ${colors.grey6};
  :hover {
    background-color: ${colors.redDark};
  }
`

export const BlueSquareButton = styled(SquareButton)<props>`
  border-color: ${colors.blueDark};
  background-color: ${colors.blueLight};
  color: ${colors.grey6};
  :hover {
    background-color: ${colors.blueDark};
  }
`

export const LinkButton = styled(ButtonBase)<props>`
  text-decoration: underline;
  border-width: 0;
  background-color: transparent;
  color: ${colors.blueDark};
  :hover {
    color: ${colors.grey1};
  }
`
