import React, { FC } from 'react'
import { Heading3 } from '../../styles/text'
import { Header } from './styled'
import { useSimpleSearch } from '../../hooks/useSimpleSearch'
import { UserModel } from '../../store/reducers/user.reducers'

type Props = {
  projectId: string
}

export const SearchField: FC<Props> = ({ children, projectId }) => {
  const [templates, searchTemplates] = useSimpleSearch<UserModel[]>(
    `/template/${projectId}?searchString=`,
    []
  )
  return (
    <Header>
      <Heading3 marginLeft={30}>{children}</Heading3>
    </Header>
  )
}
