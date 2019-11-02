import React from 'react';
import { useTranslation } from 'react-i18next';

const Indepent = () => {
  const { t } = useTranslation();
  return <>{t('独立页面')}</>;
};

Indepent.noLayout = true;

export default Indepent;
