import JudgeCard from '@components/Judges/Card';
import React from 'react'
import { VaraTalksSectionContainer } from './style';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const judges = [
    {
        name: "Tanya De Poli",
        image: '/assets/images/talks/tanya.png'
    },
    {
        name: "Orlando Álvarez",
        image: '/assets/images/talks/orlando.png'
    },
    {
        name: "Michelle Guichard",
        image: '/assets/images/talks/michelle.png'
    },
    {
        name: "Manuel Oliver",
        image: '/assets/images/talks/manuel-oliver.png'
    },
    {
        name: "Leo Macias",
        image: '/assets/images/talks/leo.png'
    },
    {
        name: "John Forero",
        image: '/assets/images/talks/jhon.png'
    },
    {
        name: "Carlos Bacceti",
        image: '/assets/images/talks/carlos.png'
    },
    {
        name: "Ana Marroquín",
        image: '/assets/images/talks/ana.png'
    },
    {
        name: "Alvar Suñol",
        image: '/assets/images/talks/alvar.png'
    },
];

function VaraTalksSection() {
  const { t } = useTranslation();
  return (
    <VaraTalksSectionContainer>
        <div className="title-carousel">
            {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => (
                <h2 key={index}>
                    SAVE THE DATE
                </h2>
            ))}
        </div>

        <div className="first-section">
            <div className="title">
                <h2>{t('home.varaTalks.title')}</h2>
                <h3>{t('home.varaTalks.date')}</h3>
            </div>

            <a href="https://www.tuboleta.com.do/lavaratalks" target="_blank" rel="noreferrer">
                <Image
                    src="/assets/images/comprar-boleta.jpg"
                    width={600}
                    height={282}
                    alt="Vara Talks"
                />
            </a>
        </div>

        <div className="second-section">
            {judges.slice(0, judges.length).map((judge, index) => (
                <JudgeCard key={index} isFirst={false} image={judge.image} name={judge.name} />
            ))}
        </div>
    </VaraTalksSectionContainer>
  )
}

export default VaraTalksSection