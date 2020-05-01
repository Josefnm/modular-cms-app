import styled from 'styled-components'
import colors from '../../../styles/colors'
import { ButtonBase } from '../../buttons'
import { Heading4 } from '../../../styles/text'

export const Button = styled(ButtonBase)`
  margin: 0 10px;
  background: transparent;
  padding: 10px;
  width: 100px;
  height: 250px;
  border-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    background-color: ${colors.grey6};
  }
`

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${colors.white};
  border: ${colors.grey4} 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0 1px 3px;
`

export const StyledHeading4 = styled(Heading4)`
  color: ${colors.grey2};
  font-weight: 400;
  margin-left: 0;
  margin-right: 0;
`
