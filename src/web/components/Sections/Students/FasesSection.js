import FaseCard from '@components/FaseCard/Index'
import React from 'react'
import { FasesSectionContainer } from './style'

function FasesSection({ fases }) {
  return (
    <FasesSectionContainer>
      {fases.map((fase, index) => (
        <FaseCard key={index} faseName={fase.name} faseDate={fase.date} faseNumber={fase.number} />
      ))}
    </FasesSectionContainer>
  )
}

export default FasesSection