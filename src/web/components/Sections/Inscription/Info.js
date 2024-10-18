import Image from 'next/image';
import React, { useEffect } from 'react';
import { InscriptionsInfoContainer } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function InscriptionsInfo() {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from('.inscriptions-title', {
      scrollTrigger: {
        trigger: '.inscriptions-title',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      opacity: 0,
      x: -200,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.fromTo(
      '.inscriptions-image',
      { y: 300 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.inscriptions-image',
          start: 'top 100%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <InscriptionsInfoContainer>
      <div className="text">
        <h2 className="inscriptions-title">{t('inscriptions.info.title')}</h2>

        <ul>
          <li>
            {t('inscriptions.info.list.first')}{' '}
            <b>{t('inscriptions.info.list.bold')}</b>
          </li>
          <li>{t('inscriptions.info.list.second')}</li>
          <li>{t('inscriptions.info.list.third')}</li>
          <li>{t('inscriptions.info.list.fourth')}</li>
          <li>{t('inscriptions.info.list.fifth')}</li>
        </ul>
      </div>

      <div className="image inscriptions-image">
        <Image
          src="/assets/images/inscripciones-bg.jpg"
          alt={t('inscriptions.banner.title')}
          width={726}
          height={700}
        />
      </div>
    </InscriptionsInfoContainer>
  );
}

export default InscriptionsInfo;