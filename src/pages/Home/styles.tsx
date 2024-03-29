/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  background-color: ${props => props.theme.colors.bg.dark};
`

export const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text.primary};
`

export const StyledSubtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: ${props => props.theme.spaces.medium};
  color: ${props => props.theme.colors.text.secondary};
`
