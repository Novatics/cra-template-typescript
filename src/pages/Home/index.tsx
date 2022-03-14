import Center from 'components/Center'
import { StyledContainer, StyledSubtitle, StyledTitle } from './styles'

const Home = () => {
  return (
    <StyledContainer>
      <Center>
        <StyledTitle>Bem vindo.</StyledTitle>
        <StyledSubtitle>Boilerplate Novatics</StyledSubtitle>
      </Center>
    </StyledContainer>
  )
}

export default Home
