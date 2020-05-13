import React, { FC, useMemo, useState } from 'react'
import { FaFile } from 'react-icons/all'
import { TableContainer } from './styled'
import { HeaderPadding, ScreenContainer, SubHeader } from '../../../components/common'
import colors from '../../../styles/colors'
import { Heading2 } from '../../../styles/text'
import { formatTimestamp } from '../../../utils/timeUtils'
import Table from '../../../components/tables/Table'
import ContentSearch from '../../../components/ContentSearch'
import { useContentSearch } from '../../../hooks/useContentSearch'
import Modal from '../../../components/Modal'
import { ContentModel } from '../../../store/reducers/content.reducers'
import ContentView from '../ContentView'

type Props = {}

const ViewScreen: FC<Props> = () => {
  const [contents, dispatchForm] = useContentSearch()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState<ContentModel>(undefined)

  const bodyValues = useMemo(() => {
    return contents.map(content => {
      return {
        onClick: () => {
          setSelectedContent(content)
          setModalOpen(true)
        },
        values: [
          content.name,
          content.templateName,
          content.ownerName,
          formatTimestamp(content.created),
        ],
      }
    })
  }, [contents])

  const headerValues = ['Name', 'Template', 'Author', 'Created']

  return (
    <ScreenContainer>
      <SubHeader>
        <HeaderPadding>
          <FaFile size={40} style={{ color: colors.greenLight }} />
          <Heading2 marginHorizontal={10}>View public content</Heading2>
        </HeaderPadding>
        <ContentSearch dispatchForm={dispatchForm} isPublic />
        <HeaderPadding />
      </SubHeader>
      <TableContainer>
        <Table headerValues={headerValues} bodyValues={bodyValues} />
      </TableContainer>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <ContentView content={selectedContent} />
      </Modal>
    </ScreenContainer>
  )
}

export default ViewScreen
