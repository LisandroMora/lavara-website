import React from 'react';
import JudgeCard from './Card';
import { StyledJudgeSection } from './style';
import { useTranslation } from 'react-i18next';

const judges = [
    {
        name: "John Forero",
        image: '/assets/images/judges/22-JhonForero.png'
    },
    {
        name: "Luciano D'Amelio",
        image: '/assets/images/judges/1-Luciano.png'
    },
    {
        name: "Diana Triana",
        image: '/assets/images/judges/2-DianaTriana.png'
    },
    {
        name: "Luis Messianu",
        image: '/assets/images/judges/3-LuisMessianu.png'
    },
    {
        name: "Ana Noriega",
        image: '/assets/images/judges/4-AnaNoriega.png'
    },
    {
        name: "Nicolas Deferrari",
        image: '/assets/images/judges/5-NicolasDeferrari.png'
    },
    {
        name: "Paola Aldaz",
        image: '/assets/images/judges/6-PaolaAldaz.png'
    },
    {
        name: "Tanya De Poli",
        image: '/assets/images/judges/7-TanyaDePoli.png'
    },
    {
        name: "Chacho Puebla",
        image: '/assets/images/judges/8-ChachoPuebla.png'
    },
    {
        name: "Veronica Elizondo",
        image: '/assets/images/judges/9-VeronicaElizondo.png'
    },
    {
        name: "Sergio León",
        image: '/assets/images/judges/10-SergioLeon.png'
    },
    {
        name: "Marina Cuesta",
        image: '/assets/images/judges/11-MarinaCuesta.png'
    },
    {
        name: "Leo Macias",
        image: '/assets/images/judges/12-LeoMacias.png'
    },
    {
        name: "Camilo Ordoñez",
        image: '/assets/images/judges/13-CamiloOrdonez.png'
    },
    {
        name: "Cintia Lin",
        image: '/assets/images/judges/15-CintiaLin.png'
    },
    {
        name: "Alvaro Suñol",
        image: '/assets/images/judges/16-AlvaroSunol.png'
    },
    {
        name: "Angélica Escruceria",
        image: '/assets/images/judges/17-AngelicaEscruceria.png'
    },
    {
        name: "Carlos Baccetti",
        image: '/assets/images/judges/18-CarlosBaccetti.png'
    },
    {
        name: "Macarena Garcia",
        image: '/assets/images/judges/19-MacarenaGarcia.png'
    },
    {
        name: "Chiky Cáceres",
        image: '/assets/images/judges/20-ChikyCaceres.png'
    },
    {
        name: "Mar Frutos",
        image: '/assets/images/judges/21-MarFrutos.png'
    },
    {
        name: "Raul Cardos",
        image: '/assets/images/judges/RaulCardos.jpg'
    },
];

function JudgesSection() {
  const { t } = useTranslation();

  return (
    <StyledJudgeSection>
      <h2>{t('judgesSection.title')} <span>2024</span></h2>
      <div className="judges-container">
        {judges.map((judge, index) => (
          <JudgeCard key={index} name={judge.name} image={judge.image} isFirst={index === 0 ? true : false} />
        ))}
      </div>
    </StyledJudgeSection>
  );
}

export default JudgesSection;