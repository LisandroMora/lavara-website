import React, { createRef, useEffect } from 'react';
import Image from 'next/image';
import { AwardsSectionContainer } from './style';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import isMobile from '@utils/isMobile';
import { useTranslation } from 'react-i18next';

function AwardsSection() {
  const titleRef = createRef(null);
  const bronzeRef = createRef(null);
  const silverRef = createRef(null);
  const goldRef = createRef(null);
  const isItMobile = isMobile();

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef && titleRef.current) {
        const spans = titleRef.current.querySelectorAll('span');
        spans.forEach((span, index) => {
          span.style.animationDelay = `${0.3 + index * 0.03}s`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [titleRef]);

  return (
    <AwardsSectionContainer>
      <Controller>
        <div className="container">
          <Scene
            triggerHook="onLeave"
            duration={1000} // Duración de la animación del scroll
            pin={isItMobile ? false : true} // Si es mobile no se pone sticky
          >
            {(progress) => (
              <div className="sticky">
                <div className="parallax">
                  <div className="awards-title" ref={titleRef}>
                    <h2>
                      {t('home.awardsSections.title')}
                    </h2>
                  </div>

                  {!isItMobile ? (<Timeline totalProgress={progress} paused>
                    <div className="images">
                      <Tween
                        from={{ y: '150%', rotationY: 360 }}
                        to={{ y: '-20%', rotationY: 0 }}
                        ref={bronzeRef}
                      >
                        <div className="bronze">
                          <Image
                            src="/assets/images/bronce.png"
                            alt="Bronce"
                            width={126}
                            height={208}
                          />
                          <p>45 {t('home.awardsSections.cases')}</p>
                        </div>
                      </Tween>

                      <Tween
                        from={{ y: '350%', rotationY: 360 }}
                        to={{ y: '0%', rotationY: 0 }}
                        ref={silverRef}
                      >
                        <div className="silver">
                          <Image
                            src="/assets/images/plata.png"
                            alt="Plata"
                            width={112}
                            height={279}
                          />
                          <p>32 {t('home.awardsSections.cases')}</p>
                        </div>
                      </Tween>

                      <Tween
                        from={{ y: '400%', rotationY: 360 }}
                        to={{ y: '0%', rotationY: 0 }}
                        ref={goldRef}
                      >
                        <div className="gold">
                          <Image
                            src="/assets/images/oro.png"
                            alt="Oro"
                            width={114}
                            height={342}
                          />
                          <p>35 {t('home.awardsSections.cases')}</p>
                        </div>
                      </Tween>
                    </div>
                  </Timeline>) 
                  :
                  <div className="images">
                      <div className="bronze">
                        <Image
                          src="/assets/images/bronce.png"
                          alt="Bronce"
                          width={126}
                          height={208}
                        />
                        <p>45 {t('home.awardsSections.cases')}</p>
                      </div>
                      <div className="silver">
                        <Image
                          src="/assets/images/plata.png"
                          alt="Plata"
                          width={112}
                          height={279}
                        />
                        <p>32 {t('home.awardsSections.cases')}</p>
                      </div>

                      <div className="gold">
                        <Image
                          src="/assets/images/oro.png"
                          alt="Oro"
                          width={114}
                          height={342}
                        />
                        <p>35 {t('home.awardsSections.cases')}</p>
                      </div>
                  </div>}
                </div>
              </div>
            )}
          </Scene>
        </div>
      </Controller>
    </AwardsSectionContainer>
  );
}

export default AwardsSection;
