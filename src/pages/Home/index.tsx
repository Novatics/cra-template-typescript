import Center from 'components/Center';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledSubtitle, StyledTitle } from './styles';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <Center>
        <StyledTitle>{t('home.title')}</StyledTitle>
        <StyledSubtitle>{t('home.subtitle')}</StyledSubtitle>
      </Center>
    </StyledContainer>
  );
};

export default Home;
