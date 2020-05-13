import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useFormikContext } from 'formik'
import { Label, StyledErrorMessage } from '../styled'
import { Heading4, Heading5 } from '../../../../../styles/text'
import Modal from '../../../../../components/Modal'
import ModalHeader from '../../../../../components/ModalHeader'
import { BorderContainer, Container, TableContainer } from './styled'
import { useSelector } from '../../../../../hooks/redux'
import Table from '../../../../../components/Table'
import { ContentModel } from '../../../../../store/reducers/content.reducers'

type Props = {
  name: string
}

type ContentModelWithName = ContentModel & { templateName: string }

const ModuleField: FC<Props> = ({ name }) => {
  const { setFieldTouched, setFieldValue } = useFormikContext()

  const projectContent = useSelector(state => state.content.projectContent)
  const projectTemplates = useSelector(state => state.template.projectTemplates)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState<ContentModelWithName>(undefined)

  useEffect(() => {
    if (selectedContent) {
      setFieldTouched(name)
      setFieldValue(name, selectedContent.id)
      setModalOpen(false)
    }
  }, [name, selectedContent, setFieldValue, setFieldTouched])

  const getTemplateName = useCallback(
    (templateId: string) => {
      return projectTemplates.find(template => template.id === templateId).name
    },
    [projectTemplates]
  )
  const bodyValues = useMemo(() => {
    return projectContent.map(content => {
      const templateName = getTemplateName(content.templateId)
      return {
        onClick: () => setSelectedContent({ ...content, templateName }),
        values: [content.name, templateName],
      }
    })
  }, [projectContent, getTemplateName])

  const headerValues = ['Type', 'Name']

  return (
    <>
      <Label onClick={() => setModalOpen(true)}>
        <Heading5 marginBottom={5} grey>
          {name}
        </Heading5>
        <BorderContainer>
          <Heading4 marginBottom={5} grey>
            {selectedContent && selectedContent.templateName}
          </Heading4>
          <Heading4 marginBottom={5}>{selectedContent && selectedContent.name}</Heading4>
          {!selectedContent && <Heading4 marginVertical={5}>Select content...</Heading4>}
        </BorderContainer>
        <StyledErrorMessage name={name} component="div" />
      </Label>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <Container>
          <ModalHeader>Select content</ModalHeader>
          <TableContainer>
            <Table bodyValues={bodyValues} headerValues={headerValues} />
          </TableContainer>
        </Container>
      </Modal>
    </>
  )
}

export default ModuleField
