import Image from 'next/image'
import React, { useEffect } from 'react'
import { WinnersContainer } from './style'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger)

function StudentsWinners() {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from('.students-winners-title', {
        scrollTrigger: {
          trigger: '.students-winners-title',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
        opacity: 0,
        x: 200,
        duration: 1,
        ease: 'power2.out',
    });

    gsap.fromTo('.students-winners-image',
        { y: 300 },
        {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.students-winners-image',
                start: 'top 100%',
                end: 'top 50%',
                scrub: true,
            },
        }
    );
  }, []);
  
  return (
    <WinnersContainer>
      <div className="image students-winners-image">
        <Image
          src="/assets/images/bottle.png"
          alt="Participantes"
          width={520}
          height={650}
        />
      </div>

      <div className="text">
        <h2 className='students-winners-title'>
          {t('students.winners.title')}
        </h2>
        
        <p>{t('students.winners.text')}</p>
      </div>
    </WinnersContainer>
  )
}

export default StudentsWinners