import FaseCard from '@components/FaseCard/Index';
import React from 'react';
import { FasesSectionContainer } from './style';
import { useTranslation } from 'react-i18next';

function FasesSection() {
  const { t } = useTranslation();
  
  const fases = [
    {
      name: t('inscriptions.fases.inscriptions'),
      date: "15 JUL - 10 OCT",
      number: 1,
    },
    {
      name: t('inscriptions.fases.shortlist'),
      date: t('inscriptions.fases.finalists'),
      number: 2,
    },
    {
      name: t('inscriptions.fases.finalists'),
      date: "27 NOV",
      number: 3,
    },
  ];

  return (
    <FasesSectionContainer>
      {fases.map((fase, index) => (
        <FaseCard key={index} faseName={fase.name} faseDate={fase.date} faseNumber={fase.number} />
      ))}
    </FasesSectionContainer>
  )
}

export default FasesSection