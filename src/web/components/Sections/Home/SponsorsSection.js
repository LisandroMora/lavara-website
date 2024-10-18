/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SponsorsSectionContainer } from './style'
import { useTranslation } from 'react-i18next';

const imagesPaths = [
    '/assets/images/sponsors/duv.png',
    '/assets/images/sponsors/indotel.png',
    '/assets/images/sponsors/llyc.png',
    '/assets/images/sponsors/polux.png',
    '/assets/images/sponsors/produ.png',
    '/assets/images/sponsors/skyhigh.png',
]

function SponsorsSection() {
  const { t } = useTranslation();
  return (
    <SponsorsSectionContainer>
        <h2>
            {t('home.sponsorsSection.title')}
        </h2>

        <div className="sponsors">
            {imagesPaths.map((path, index) => (
                <div key={index} className="sponsor">
                    <img src={path} alt="sponsor" />
                </div>
            ))}
        </div>
    </SponsorsSectionContainer>
  )
}

export default SponsorsSection