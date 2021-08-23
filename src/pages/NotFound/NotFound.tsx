import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleGoHome = (): void => history.push('/');

  return (
    <>
      <h1>{t('error.404.page-not-found')}</h1>
      <h2>{t('error.404.sorry-we-could-not-find-it')}</h2>
      <button type="button" onClick={handleGoHome}>
        {t('error.404.back-to-home')}
      </button>
    </>
  );
};

export default NotFound;
