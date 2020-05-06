import React, { FunctionComponent } from 'react'
import { CenterContainer } from './styled'
import { Heading2 } from '../../styles/text'
import { useSelector } from '../../hooks/redux'

type Props = {}

const HomeScreen: FunctionComponent<Props> = () => {
  const { userName } = useSelector(state => state.user.profile)
  return (
    <CenterContainer>
      <Heading2>Welcome, {userName}</Heading2>
    </CenterContainer>
  )
}

export default HomeScreen
