import { StyledContainer } from './styles'

interface ICenterProps {
  children: React.ReactNode
}

const Center = ({ children }: ICenterProps) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Center
