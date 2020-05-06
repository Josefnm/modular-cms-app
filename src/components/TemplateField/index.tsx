import React, { FunctionComponent, useMemo } from 'react'
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
import { fieldTypes } from '../../models/dataType'
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
  const deleteThis = () => arrayHelpers.remove(index)

  const fieldType = useMemo(() => {
    return fieldTypes.find(f => f.type === templateField.dataType)
  }, [templateField.dataType])

  return (
    <Container>
      <EditButton>
        <IconContainer>
          {React.createElement(fieldType.iconType, {
            ...iconStyle,
          })}
        </IconContainer>
        <Heading3 marginHorizontal={10}>{templateField.name}</Heading3>
        <StyledHeading4>{fieldType.headerText}</StyledHeading4>
      </EditButton>
      <DeleteButton onClick={deleteThis}>
        <StyledMdClose />
      </DeleteButton>
    </Container>
  )
}

export default TemplateField
