import Image from "next/image";
import { StyledFloatingButton } from "./style";
import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingButton = () => {
    const [isAtBottom, setIsAtBottom] = useState(false)

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - 100;
      
        if (scrollTop + windowHeight >= documentHeight) {
          setIsAtBottom(true);
        } else {
          setIsAtBottom(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

	return (
        <a href="https://www.tuboleta.com.do/lavarapremiacion" target="_blank" rel="noreferrer">
            <StyledFloatingButton className={isAtBottom ? 'isAtBottom' : ''}>
                <div className="image-container">
                    <Image
                        src="/assets/images/boton-inscripcion.png"
                        alt="Ir arriba"
                        width={250}
                        height={250}
                    />

                    <div className="button-letters">
                        <div className="image-container">
                            <Image
                                src="/assets/images/LAVARA.svg"
                                alt="Ir arriba"
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>
                </div>
            </StyledFloatingButton>
        </a>
	);
}

export default FloatingButton;