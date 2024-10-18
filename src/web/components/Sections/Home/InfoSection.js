import React, { useEffect } from 'react';
import { InfoSectionContainer } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function InfoSection() {
  const { t } = useTranslation();
  
  useEffect(() => {
    gsap.from('.info-title', {
      scrollTrigger: {
        trigger: '.info-title',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  useEffect(() => {
    gsap.from('.info-section', {
      scrollTrigger: {
        trigger: '.info-section',
        start: 'top 100%',
        end: 'top 60%',
        scrub: true,
      },
      opacity: 0,
      x: 200,
      duration: 2,
      ease: 'power2.out',
    });
  }
  , []);

  return (
    <InfoSectionContainer>
      <h2 className='info-title'>
        {t('home.infoSection.title')}
      </h2>

      <div className="info-section">
        <p>{t('home.infoSection.desciption.first')} <b>{t('home.infoSection.desciption.second')}</b></p>
        <br />
        <p>{t('home.infoSection.desciption.third')}</p>
      </div>
    </InfoSectionContainer>
  );
}

export default InfoSection;
