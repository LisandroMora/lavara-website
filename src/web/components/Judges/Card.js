import Image from 'next/image'
import React from 'react'
import { StyledJudgeCard } from './style'

function JudgeCard({ name, image, isFirst }) {
  return (
    <StyledJudgeCard isFirst={isFirst}>
      <Image
        src={image}
        alt={name}
        width={250}
        height={222}
      />

      <div className='name'>
        <h3>{name}</h3>
        {isFirst ? <span>Presidente</span> : <></>}
      </div>
    </StyledJudgeCard>
  )
}

export default JudgeCard