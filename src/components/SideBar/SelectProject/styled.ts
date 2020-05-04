import styled from 'styled-components'
import { FaCaretRight, FaFolder } from 'react-icons/all'
import { ButtonBase } from '../../buttons'
import { Heading4 } from '../../../styles/text'
import colors from '../../../styles/colors'

type Props = {
  isSelected: boolean
}

export const ProjectButton = styled(ButtonBase)<Props>`
  background-color: ${({ isSelected }) => (isSelected ? colors.grey5 : 'transparent')};
  border-width: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 8px 20px;
`

export const ProjectName = styled(Heading4).attrs({ grey: true })`
  flex: 1;
  font-weight: 500;
  text-align: left;
  margin: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FolderIcon = styled(FaFolder).attrs({ size: 20 })`
  color: ${colors.grey4};
  font-weight: 500;
`

export const ArrowIcon = styled(FaCaretRight).attrs({ size: 14 })`
  color: ${colors.grey4};
  font-weight: 500;
`
