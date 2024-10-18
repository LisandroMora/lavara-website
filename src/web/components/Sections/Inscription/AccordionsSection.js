import Accordion from '@components/Accordion/Index'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AccordionsSectionContainer } from './style'

function AccordionsSection() {
  const { t } = useTranslation()

  return (
    <AccordionsSectionContainer>
      <Accordion title={t('inscriptions.accordions.conditions.title')}>
        <ul>
          {t('inscriptions.accordions.conditions.content', { returnObjects: true }).map((text, index) => (
            <li key={index}>
              {typeof text === 'string' ? text : (
                <ul>
                  {text.subContent.map((subText, subIndex) => (
                    <li key={subIndex}>{subText}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('inscriptions.accordions.jurors.title')}>
        <ul>
          {t('inscriptions.accordions.jurors.content', { returnObjects: true }).map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={t('inscriptions.accordions.credits.title')}>
        <p>{t('inscriptions.accordions.credits.content.0')}</p>
        <ul>
          <li>{t('inscriptions.accordions.credits.content.1')}</li>
          <ul>
            {t('inscriptions.accordions.credits.content.2.subContent', { returnObjects: true }).map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <li>{t('inscriptions.accordions.credits.content.3')}</li>
        </ul>
      </Accordion>
    </AccordionsSectionContainer>
  )
}

export default AccordionsSection
