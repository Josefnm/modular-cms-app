import React, { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import { Button, IconContainer, StyledHeading4 } from './styled'
import { Heading3 } from '../../../styles/text'
import colors from '../../../styles/colors'

type OwnProps = {
  iconType: IconType
  headerText: string
  bodyText: string
  onClick: (string) => void
}
type Props = OwnProps

const FieldType: FunctionComponent<Props> = ({ iconType, headerText, bodyText, onClick }) => {
  return (
    <Button onClick={onClick}>
      <IconContainer>
        {React.createElement(iconType, { size: 60, style: { color: colors.greenLight } })}
      </IconContainer>
      <Heading3 margin={5}>{headerText}</Heading3>
      <StyledHeading4 margin={5}>{bodyText}</StyledHeading4>
    </Button>
  )
}

export default FieldType
