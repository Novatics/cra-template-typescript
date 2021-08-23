import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Link as LinkRouter } from 'react-router-dom';
import { Container } from './styles';

const AppHeader: React.FC = () => {
  return (
    <Container>
      <LinkRouter to="/">
        <Logo width="160" />
      </LinkRouter>
    </Container>
  );
};

export default AppHeader;
