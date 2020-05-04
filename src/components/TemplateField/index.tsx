import React, { FunctionComponent } from 'react'
import { FieldArrayRenderProps } from 'formik'
import {
  Container,
  DeleteButton,
  EditButton,
  IconContainer,
  StyledHeading4,
  StyledMdClose,
} from './styled'
import colors from '../../styles/colors'
import { Heading3 } from '../../styles/text'
import { DataType, fieldTypes } from '../../models/dataType'
import { TemplateFieldModel } from '../../store/reducers/template.reducers'

type Props = {
  templateField: TemplateFieldModel
  arrayHelpers: FieldArrayRenderProps
  index: number
}

const iconStyle = {
  size: 25,
  style: { color: colors.greenExtraLight },
}

const TemplateField: FunctionComponent<Props> = ({ templateField, arrayHelpers, index }) => {
  const fields = fieldTypes[DataType[templateField.dataType]]
  const deleteThis = () => arrayHelpers.remove(index)
  return (
    <Container>
      <EditButton>
        <IconContainer>
          {React.createElement(fields.iconType, {
            ...iconStyle,
          })}
        </IconContainer>
        <Heading3 marginHorizontal={10}>{templateField.name}</Heading3>
        <StyledHeading4>{fields.headerText}</StyledHeading4>
      </EditButton>
      <DeleteButton onClick={deleteThis}>
        <StyledMdClose />
      </DeleteButton>
    </Container>
  )
}

export default TemplateField
