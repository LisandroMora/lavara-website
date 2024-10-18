import React, { useEffect } from 'react';
import { StyledMainBanner } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import isMobile from '@utils/isMobile';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function MainBanner() {
  const isItMobile = isMobile();
  const { t } = useTranslation();

  useEffect(() => {
    if (isItMobile) return;
    gsap.fromTo('.main-banner',
      { width: '98%', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' },
      {
        width: '100%',
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '0',
        scrollTrigger: {
          trigger: '.main-banner',
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'none',
      }
    );
  }, [isItMobile]);

  return (
    <StyledMainBanner className='main-banner'>
      <h1 className="title">
        <p>{t('home.banner.title.first')}</p>
        <p>{t('home.banner.title.second')}</p>
        <p>{t('home.banner.title.third')}</p>
        <p>{t('home.banner.title.fourth')}</p>
      </h1>

      <div className="label-banner">
        <span>{t('home.banner.label.first')}</span>
        <span>{t('home.banner.label.second')}</span>
      </div>
    </StyledMainBanner>
  );
}

export default MainBanner;
