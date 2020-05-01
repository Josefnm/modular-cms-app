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

const size = {
  h1: 2,
  h2: 1.75,
  h3: 1.5,
  h4: 1.25,
  h5: 1,
  h6: 0.75,
}

const marginProps = css<MarginProps>`
   margin: 0;
  ${({ margin }) => margin && `margin: ${margin}px`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px`}
  ${({ marginHorizontal }) =>
    marginHorizontal && `margin-left: ${marginHorizontal}px; margin-right:${marginHorizontal}px;`}
  ${({ marginVertical }) =>
    marginVertical && `margin-top: ${marginVertical}px; margin-bottom:${marginVertical}px;`}
`

const textProps = css`
  color: ${colors.grey1};
`

const textBase = css`
  ${textProps}
  ${marginProps}
`

export const Heading1 = styled.h1<MarginProps>`
  font-weight: 700;
  ${textBase};
`

export const Heading2 = styled.h2<MarginProps>`
  font-weight: 700;
  ${textBase};
`

export const Heading3 = styled.h3<MarginProps>`
  font-weight: 700;
  ${textBase};
`

export const Heading4 = styled.h4<MarginProps>`
  font-weight: 700;
  ${textBase};
`
export const Heading5 = styled.h5<MarginProps>`
  font-weight: 500;
  ${textBase};
`

export const Heading6 = styled.h6<MarginProps>`
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
