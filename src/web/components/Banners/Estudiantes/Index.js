import React, { useEffect, useState } from 'react'
import { BannerContainer, StyledEstudiantesBanner } from './style'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const limitDate = new Date('2024-10-10T23:59:59').getTime();

function EstudiantesBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = limitDate - now

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout()
  }, [])

  useEffect(() => {
    gsap.fromTo('.buttons-section', {
      y: 20,
    }, {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.buttons-section',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });
  }, []);

  return (
    <BannerContainer>
      <StyledEstudiantesBanner>
        <h1>{t('students.banner.title')} <span>2024</span></h1>

        <div className='counter'>
          <p>{t('students.banner.closed')}</p>

          {!isLoading ? <div className='number'>
            <span>{timeLeft.days}D</span>
            <span>{timeLeft.hours}H</span>
            <span>{timeLeft.minutes}M</span>
            <span>{timeLeft.seconds}S</span>
          </div> : <div className="loader"></div>}
        </div>
      </StyledEstudiantesBanner>
      <div className="buttons-section">
        <a href="https://la-vara-awards.acclaimworks.com/uba/auth" target="_blank" rel="noreferrer">
          <div className="item">
            <h3>{t('students.banner.register')}</h3>
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
        
        <a href="https://www.adecc.com.do/_files/ugd/485d82_f1ae1b163a3c41b395b34af952ed2ab1.pdf" target="_blank" rel="noreferrer">
          <div className="item">
            <h3>{t('students.banner.brief')}</h3>
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
    </BannerContainer>
  )
}

export default EstudiantesBanner