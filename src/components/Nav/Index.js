import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavContainer } from './style'
import LanguageSwitcher from '../LanguageSwitch';
import { useTranslation } from 'react-i18next';

function Nav() {
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const handleChangeOpen = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        return () => {
            window.removeEventListener('scroll', changeNav);
        }
    }, []);

    return (
        <NavContainer className={scroll ? 'scrolled' : ''} isOpen={isOpen}>
            <Link href="/">
                <a className="logo">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo La Vara"
                        width={340}
                        height={70}
                    />
                </a>
            </Link>

            <div className="mobile-menu" onClick={handleChangeOpen}>
                <svg width="30" height="30" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 38V28L17.3585 28L20.3774 36L40 38Z" fill="#EED116"/>
                    <path d="M40 24L37.3585 15L0 14L2.26415 24L40 24Z" fill="#4FC5D3"/>
                    <path d="M23.3962 10L20.7547 1.5L1.33514e-05 0V10L23.3962 10Z" fill="#F47D20"/>
                </svg>
            </div>            

            <nav>
                <div className="close-icon" onClick={handleChangeOpen}>
                    <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.3266 6.73327L25.8939 2.62631L2.19345e-05 29.5738L8.91798 34.6331L34.3266 6.73327Z" fill="#4FC5D3"/>
                        <path d="M27.2538 35.9679L32.1015 27.9703L8.31267 0.999992L2.48602 9.41409L27.2538 35.9679Z" fill="#DF2126"/>
                    </svg>
                </div>
                <div className="nav-link">
                    <div className='link'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        <Link href="/">
                            <a>{t('nav.home')}</a>
                        </Link>
                    </div>
                    <div className='link disabled'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        <Link href="/ganadores">
                            <a>{t('nav.winners')}</a>
                        </Link>
                    </div>
                    <div className='link disabled'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        <Link href="/blog">
                            <a>{t('nav.news')}</a>
                        </Link>
                    </div>
                    <div className='link'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        <Link href="/inscripciones">
                            <a>{t('nav.inscriptions')}</a>
                        </Link>
                    </div>
                    <div className='link'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        <Link href="/estudiantes">
                            <a>{t('nav.students')}</a>
                        </Link>
                    </div>
                </div>
                <LanguageSwitcher />
            </nav>
        </NavContainer>
    )
}

export default Nav