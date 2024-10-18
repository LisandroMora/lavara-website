import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { LanguageContext } from '@contexts/LanguageContext';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
`;

const ToggleLabel = styled.span`
  font-size: 1em;
  color: ${(props) => (props.selected ? 'var(--secondary-bg-color)' : 'var(--primary-bg-color)')};
  cursor: pointer;
  margin: 0 5px;
  font-family: 'Avenir';
`;

const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 10px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? 'var(--primary-bg-color)' : 'var(--secondary-bg-color)')};
  transition: .4s;
  border-radius: 15px;
`;

const SliderBefore = styled.div`
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: white;
  transition: .4s;
  transform: ${(props) => (props.checked ? 'translateX(20px)' : 'translateX(0)')};
  top: 2px;
  left: 2px;
`;

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleToggle = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  const isEnglish = language === 'en';

  return (
    <ToggleContainer>
      <ToggleLabel
        selected={isEnglish}
        onClick={() => changeLanguage('en')}
      >
        Es
      </ToggleLabel>
      <ToggleSwitch onClick={handleToggle}>
        <SwitchInput
          type="checkbox"
          checked={isEnglish}
          onChange={handleToggle}
          id="language-toggle"
        />
        <Slider checked={isEnglish}>
          <SliderBefore checked={isEnglish} />
        </Slider>
      </ToggleSwitch>
      <ToggleLabel
        selected={!isEnglish}
        onClick={() => changeLanguage('es')}
      >
        En
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default LanguageSwitcher;
