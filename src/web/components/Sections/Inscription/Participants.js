import Image from 'next/image';
import React, { useEffect } from 'react';
import { ParticipantsContainer } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

function Participants() {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from('.participants-title', {
      scrollTrigger: {
        trigger: '.participants-title',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      opacity: 0,
      x: 200,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.fromTo(
      '.participants-image',
      { y: 300 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.participants-image',
          start: 'top 100%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <ParticipantsContainer>
      <div className="image participants-image">
        <Image
          src="/assets/images/participantes-bg.jpg"
          alt="Participantes"
          width={708}
          height={670}
        />
      </div>

      <div className="text">
        <h2 className="participants-title">{t('inscriptions.participants.title')}</h2>
        <p>{t('inscriptions.participants.text.first')}</p>
        <p>{t('inscriptions.participants.text.second')}</p>
      </div>
    </ParticipantsContainer>
  );
}

export default Participants;