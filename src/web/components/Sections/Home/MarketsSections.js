/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { MarketSectionContainer } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

const flagsPaths = [
  '/assets/images/flags/image1.png',
  '/assets/images/flags/image3.png',
  '/assets/images/flags/image4.png',
  '/assets/images/flags/image5.png',
  '/assets/images/flags/image6.png',
  '/assets/images/flags/image7.png',
  '/assets/images/flags/image8.png',
  '/assets/images/flags/image9.png',
  '/assets/images/flags/image10.png',
  '/assets/images/flags/image11.png',
  '/assets/images/flags/image12.png',
  '/assets/images/flags/image13.png',
  '/assets/images/flags/image14.png',
  '/assets/images/flags/image15.png',
  '/assets/images/flags/image16.png',
  '/assets/images/flags/image17.png',
];

gsap.registerPlugin(ScrollTrigger);

function MarketsSection() {
  const { t } = useTranslation();
  return (
    <MarketSectionContainer>
      <div className="flags">
        {flagsPaths.slice(0, 8).map((flag, index) => (
          <img key={index} src={flag} alt="Flag" />
        ))}
        {flagsPaths.slice(0, 8).map((flag, index) => (
          <img key={index + 8} src={flag} alt="Flag" />
        ))}
      </div>

      <h2 className="market-title">
        {t('home.marketSection.title')}
      </h2>

      <div className="flags">
        {flagsPaths.slice(8, 16).map((flag, index) => (
          <img key={index + 16} src={flag} alt="Flag" />
        ))}
        {flagsPaths.slice(8, 16).map((flag, index) => (
          <img key={index + 24} src={flag} alt="Flag" />
        ))}
      </div>
    </MarketSectionContainer>
  );
}

export default MarketsSection;