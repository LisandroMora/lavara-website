import React from 'react'
import { PriceBannerContainer } from './style'
import { useTranslation } from 'react-i18next';

function PriceBanner() {
  const { t } = useTranslation();
  return (
    <PriceBannerContainer>
        <div className="price-banner">
            <h3>{t('students.expenses.title')}</h3>
            <div className='price-banner__content'>
                <p>{t('students.expenses.dates.since')} <b>{t('students.expenses.dates.sinceBold')}</b></p>
                <p>{t('students.expenses.dates.until')} <b>{t('students.expenses.dates.untilBold')}</b></p>
            </div>
            <h3>50USD</h3>
        </div>
    </PriceBannerContainer>
  )
}

export default PriceBanner