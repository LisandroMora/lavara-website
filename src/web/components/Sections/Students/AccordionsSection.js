import Accordion from '@components/Accordion/Index';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionsSectionContainer } from './style';

function AccordionsSection() {
  const { t } = useTranslation();

  const accordions = t('students.accordions', { returnObjects: true });

  return (
    <AccordionsSectionContainer>
      {/* REQUISITOS PARA PARTICIPANTES */}
      <Accordion title={accordions.participantsRequirements.title}>
        <ul>
          {accordions.participantsRequirements.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Accordion>

      {/* REQUISITOS DE PROPUESTA */}
      <Accordion title={accordions.proposalRequirements.title}>
        <ul>
          {accordions.proposalRequirements.content.map((item, index) => {
            if (typeof item === 'string') {
              return <li key={index} dangerouslySetInnerHTML={{ __html: item }} />;
            } else if (item.optional) {
              return (
                <ul key={index}>
                  {item.optional.map((optionalItem, idx) => (
                    <li key={idx}>{optionalItem}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </ul>
      </Accordion>

      {/* REGLAMENTO */}
      <Accordion title={accordions.rules.title}>
        <ul>
          {accordions.rules.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Accordion>

      {/* PREGUNTAS FRECUENTES */}
      <Accordion title={accordions.faq.title}>
        {accordions.faq.questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <ul>
              <li>{q.answer}</li>
            </ul>
          </div>
        ))}
      </Accordion>
    </AccordionsSectionContainer>
  );
}

export default AccordionsSection;
