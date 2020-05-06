import styled, { css } from 'styled-components'
import colors from './colors'

type MarginProps = {
  margin?: number
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  marginBottom?: number
  marginVertical?: number
  marginHorizontal?: number
}

const marginProps = css<MarginProps>`
   margin: 0;
  ${({ margin }) => margin && `margin: ${margin}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginHorizontal }) =>
    marginHorizontal && `margin-left: ${marginHorizontal}px; margin-right:${marginHorizontal}px;`}
  ${({ marginVertical }) =>
    marginVertical && `margin-top: ${marginVertical}px; margin-bottom:${marginVertical}px;`}
`

type ColorProps = {
  white?: boolean
  blue?: boolean
  grey?: boolean
}

export const textColors = {
  base: '#2A3039',
  white: '#ffffff',
  blue: '#3C7FCF',
  grey: '#536171',
}

const colorProps = css<ColorProps>`
  ${props => props.white && `color: ${textColors.white};`}
  ${props => props.blue && `color: ${textColors.blue};`}
  ${props => props.grey && `color: ${textColors.grey};`}
`

type TextProps = ColorProps & MarginProps

const textBase = css`
  ${colorProps}
  ${marginProps}
`

export const Heading1 = styled.h1<TextProps>`
  font-weight: 700;
  ${textBase};
`

export const Heading2 = styled.h2<TextProps>`
  font-weight: 700;
  ${textBase};
`

export const Heading3 = styled.h3<TextProps>`
  font-weight: 700;
  ${textBase};
`

export const Heading4 = styled.h4<TextProps>`
  font-weight: 700;
  ${textBase};
`
export const Heading5 = styled.h5<TextProps>`
  font-weight: 600;
  ${textBase};
`

export const Heading6 = styled.h6<TextProps>`
  font-weight: 700;
  ${textBase};
`
/*
  ${props => props.light && `color: #6C6683`}
  ${props => props.veryLight && `color: ${colors.lightTitleText}`}
  ${props => props.error && 'color: #FF0646'}
  ${props => props.success && 'color: #02AAA1'}
  ${props => props.semibold && `font-family: ${variables.primaryFontSemiBold}`}
  ${props => props.color && `color: ${props.color}`}
const TextBase = css`
  ${textBase}
  ${textProps}
  ${marginProps}
`

export const Heading1 = styled.h1`
  font-family: ${variables.primaryFontBold};
  font-size: ${24 * variables.FONTSIZE_MODIFIER};
`

export const Heading2 = styled.h2`
  font-family: ${props => (props.bold ? variables.primaryFontBold : variables.primaryFontSemiBold)};
  font-weight: ${props => (props.bold ? variables.primaryFontBold : variables.primaryFontSemiBold)};
  font-size: ${20 * variables.FONTSIZE_MODIFIER};
`

export const Heading3 = styled.h3`
  font-family: ${props => (props.bold ? variables.primaryFontBold : variables.primaryFontMedium)};
  font-size: ${16 * variables.FONTSIZE_MODIFIER};
`

export const Heading4 = styled.h4`
  font-family: ${props => (props.bold ? variables.primaryFontBold : variables.primaryFontMedium)};
  font-size: ${14 * variables.FONTSIZE_MODIFIER};
  line-height: 18;
`

export const Heading5 = styled.h5`
  font-family: ${props => (props.bold ? variables.primaryFontBold : variables.primaryFontMedium)};
  font-size: ${12 * variables.FONTSIZE_MODIFIER};
  line-height: 14;
`
export const Heading6 = styled.h6`
  font-family: ${props => (props.bold ? variables.primaryFontBold : variables.primaryFontMedium)};
  font-size: ${12 * variables.FONTSIZE_MODIFIER};
  line-height: 14;
`

export const Paragraph = styled.p`
  font-family: ${variables.primaryFontMedium};
  font-size: ${16 * variables.FONTSIZE_MODIFIER};
  line-height: 18;
  ${textProps}
`
*/
