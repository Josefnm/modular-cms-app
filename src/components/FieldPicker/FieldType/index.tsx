import React, { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import { FieldTypeButton, IconContainer, StyledHeading3 } from './styled'
import { Heading2 } from '../../../styles/text'
import colors from '../../../styles/colors'

const iconStyle = { size: 60, style: { color: colors.greenExtraLight } }

type Props = {
  iconType: IconType
  headerText: string
  bodyText: string
  onClick: (string) => void
}

const FieldType: FunctionComponent<Props> = ({ iconType, headerText, bodyText, onClick }) => {
  return (
    <FieldTypeButton onClick={onClick}>
      <IconContainer>{React.createElement(iconType, { ...iconStyle })}</IconContainer>
      <Heading2 margin={5}>{headerText}</Heading2>
      <StyledHeading3 margin={5}>{bodyText}</StyledHeading3>
    </FieldTypeButton>
  )
}

export default FieldType
