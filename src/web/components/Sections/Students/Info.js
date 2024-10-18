import Image from 'next/image'
import React, { useEffect } from 'react'
import { StudentsInfoContainer } from './style'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger)

function StudentsInfo() {
  
  useEffect(() => {
    gsap.from('.students-title', {
        scrollTrigger: {
          trigger: '.students-title',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
        opacity: 0,
        x: -200,
        duration: 1,
        ease: 'power2.out',
    });

    gsap.fromTo('.students-image',
        { y: 300 },
        {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.students-image',
                start: 'top 100%',
                end: 'top 50%',
                scrub: true,
            },
        }
    );
  }, []);

  const { t } = useTranslation();
  
  return (
    <StudentsInfoContainer>
      <div className="text">
        <h2 className="students-title">
          {t('students.info.title')}
        </h2>
        <p>{t('students.info.text')}</p>
      </div>

      <div className="image students-image">
        <Image
          src="/assets/images/world.png"
          alt="Inscripciones"
          width={479}
          height={787}
        />
      </div>
    </StudentsInfoContainer>
  )
}

export default StudentsInfo