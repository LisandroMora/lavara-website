import React, { useEffect } from 'react'
import { StyledFaseCard } from './style'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FaseCard({ faseName = 'Inscripciones', faseDate = '15 Jul - 20 Sep', faseNumber = '1' }) {
  useEffect(() => {
    gsap.fromTo(`.fase-${faseNumber}`, {
      y: 20 * faseNumber * 2,
    }, {
      y: 0,
      duration: faseNumber * 0.5,
      scrollTrigger: {
        trigger: `.fase-${faseNumber}`,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });
  }, [faseNumber]);
  return (
    <StyledFaseCard className={`fase fase-${faseNumber}`}>
      <h3>Fase {faseNumber}</h3>
      <h3>{faseName}</h3>
      <p>{faseDate}</p>
    </StyledFaseCard>
  )
}

export default FaseCard