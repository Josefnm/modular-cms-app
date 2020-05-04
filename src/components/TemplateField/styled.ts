import styled from 'styled-components'
import { MdClose } from 'react-icons/all'
import colors from '../../styles/colors'
import { ButtonBase } from '../buttons'
import { Heading4 } from '../../styles/text'

export const EditButton = styled(ButtonBase).attrs({ type: 'button' })`
  padding: 0 0 0 10px;
  height: 100%;
  border-width: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  box-shadow: 1px 1px 2px 0 ${colors.grey4};
`

export const Container = styled.div`
  border-radius: 3px;
  background: ${colors.white};
  width: 600px;
  height: 45px;
  border: 1px solid ${colors.grey4};
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  box-shadow: 1px 1px 2px 0 ${colors.grey4};
`

export const DeleteButton = styled(ButtonBase).attrs({ type: 'button' })`
  height: 100%;
  border-width: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  border-radius: 8px;
  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  border: ${colors.greenExtraLight} 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledHeading4 = styled(Heading4)`
  color: ${colors.grey2};
  font-weight: 500;
`

export const StyledMdClose = styled(MdClose).attrs({ size: 30 })`
  color: ${colors.redDark};
`
