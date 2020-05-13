import React, { FC, useMemo } from 'react'
import moment from 'moment'
import { BodyContainer, Container } from './styled'
import ModalHeader from '../../../components/ModalHeader'
import { ContentFieldModel, ContentModel } from '../../../store/reducers/content.reducers'
import ElementTable from '../../../components/tables/ElementTable'
import { DataType } from '../../../models/dataType'
import { StyledImage } from '../../../components/common'

type Props = {
  content: ContentModel
}

export const getContentType = (contentField: ContentFieldModel) => {
  switch (contentField.type) {
    case DataType.IMAGE:
      return (
        <StyledImage key={contentField.name + 1} src={contentField.data} alt={contentField.name} />
      )
    case DataType.TEXT:
      return (
        <div key={contentField.name + 1} dangerouslySetInnerHTML={{ __html: contentField.data }} />
      )
    case DataType.DATE:
      return (
        <div key={contentField.name + 1}>
          {' '}
          {moment(contentField.data).format('YYYY-MM-DD, HH:mm')}
        </div>
      )
    case DataType.MODULE:
      return <div key={contentField.name + 1}> {contentField.data}</div>
    default:
      return <div key={contentField.name + 1}>{contentField.data.toString()}</div>
  }
}

const ContentView: FC<Props> = ({ content }) => {
  const modalBodyValues = useMemo(() => {
    return content.contentFields.map(contentField => {
      return {
        values: [
          <div key={contentField.name}>{contentField.name}</div>,
          getContentType(contentField),
        ],
      }
    })
  }, [content])

  const modalHeaderValues = ['Name', 'Value']

  return (
    <Container>
      <ModalHeader>{content.name}</ModalHeader>
      <BodyContainer>
        <ElementTable bodyValues={modalBodyValues} headerValues={modalHeaderValues} />
      </BodyContainer>
    </Container>
  )
}

export default ContentView
