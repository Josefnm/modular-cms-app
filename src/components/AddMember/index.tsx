import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import { FieldArrayRenderProps } from 'formik'
import { ButtonContainer, Container, BodyContainer, SearchInput, TableContainer } from './styled'
import { SquareButton } from '../buttons'
import ModalHeader from '../ModalHeader'
import Table from '../Table'
import { UserModel } from '../../store/reducers/user.reducers'
import { useSimpleSearch } from '../../hooks/useSimpleSearch'

type Props = {
  setModalOpen: Dispatch<SetStateAction<boolean>>
  projectId: string
  arrayHelpers: FieldArrayRenderProps
}

const AddMember: FunctionComponent<Props> = ({ projectId, setModalOpen, arrayHelpers }) => {
  const [users, searchUsers] = useSimpleSearch<UserModel[]>(
    `/user/search?projectId=${projectId}&searchString=`,
    []
  )

  const addMember = useCallback(
    (user: UserModel) => () => {
      arrayHelpers.push(user)
      setModalOpen(false)
    },
    [arrayHelpers, setModalOpen]
  )

  const bodyValues = useMemo(() => {
    return users.map(user => {
      return {
        onClick: addMember(user),
        values: [user.userName, user.email],
      }
    })
  }, [users, addMember])

  useEffect(() => {
    searchUsers()
  }, [searchUsers])

  const headerValues = ['Name', 'Email']

  return (
    <Container>
      <ModalHeader>Add member</ModalHeader>
      <BodyContainer>
        <SearchInput type="text" onChange={searchUsers} placeholder="Search..." />
        <TableContainer>
          <Table bodyValues={bodyValues} headerValues={headerValues} />
        </TableContainer>
        <ButtonContainer>
          <SquareButton onClick={() => setModalOpen(false)}>Cancel</SquareButton>
        </ButtonContainer>
      </BodyContainer>
    </Container>
  )
}

export default AddMember
