import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledSubtitle, StyledTitle } from './styles';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledTitle>{t('home.title')}</StyledTitle>
      <StyledSubtitle>{t('home.subtitle')}</StyledSubtitle>
    </StyledContainer>
  );
};

export default Home;
