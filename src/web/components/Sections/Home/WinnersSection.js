import Image from 'next/image';
import React, { useEffect } from 'react';
import { WinnerSectionContainer } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function WinnersSection() {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo('.winners-banner',
      { width: '95%', height: '100%' },
      {
        width: '100%',
        height: '100%',
        scrollTrigger: {
          trigger: '.winners-banner',
          start: 'top 100%',
          end: 'bottom 100%',
          scrub: true,
        },
        ease: 'none',
      }
    );
  }, []);

  return (
    <WinnerSectionContainer>
      <div className="winners-banner">
        <Image
          src="/assets/images/winners-bg.jpg"
          alt="Winners Banner"
          layout='fill'
        />

        <div className="title">
          <h2>{t('home.winnersSection.title.first')}<br />{t('home.winnersSection.title.second')}</h2>
        </div>
      </div>

      <div className="winners-section">
        <a href="https://www.adecc.com.do/_files/ugd/4e04fb_d553db5632864283af3651c2971d89fd.pdf" target="_blank" rel="noreferrer">
          <div className="item">
            <svg className="border-svg">
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            <h3>2023</h3>
            <svg width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2009_95)">
                <path d="M62 53V40.3636L7.62939e-06 40.3636V53H62Z" fill="#EED116" className='bottom'/>
                <path d="M0 12.8371V0L62 27.3838V40.2209L0 12.8371Z" fill="white" className='top'/>
              </g>
              <defs>
                <clipPath id="clip0_2009_95">
                  <rect width="62" height="53" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>

        <a href="https://www.adecc.com.do/_files/ugd/485d82_7ab85e9d1dea467b9bb49f93977d2a3d.pdf" target="_blank" rel="noreferrer">
          <div className="item">
            <h3>2022</h3>
            <svg className="border-svg">
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            <svg width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2009_95)">
                <path d="M62 53V40.3636L7.62939e-06 40.3636V53H62Z" fill="#EED116" className='bottom'/>
                <path d="M0 12.8371V0L62 27.3838V40.2209L0 12.8371Z" fill="white" className='top'/>
              </g>
              <defs>
                <clipPath id="clip0_2009_95">
                  <rect width="62" height="53" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    </WinnerSectionContainer>
  );
}

export default WinnersSection;