import React, { FunctionComponent, useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { LinkButton } from '../../components/buttons'
import { Heading4 } from '../../styles/text'
import { Container, FormContainer, LinkButtonContainer } from './styled'

type Props = {}

const AuthScreen: FunctionComponent<Props> = () => {
  const [loginSelected, setLoginSelected] = useState(true)
  const [buttonText, setButtonText] = useState('Sign up')

  const selectLogin = () => {
    setLoginSelected(!loginSelected)
    setButtonText(loginSelected ? 'Sign up' : 'Log in')
  }

  return (
    <Container>
      <FormContainer>
        <LinkButtonContainer>
          <LinkButton onClick={selectLogin}>
            <Heading4>{buttonText}</Heading4>
          </LinkButton>
        </LinkButtonContainer>

        {loginSelected ? <Login /> : <Signup />}
      </FormContainer>
    </Container>
  )
}

export default AuthScreen
