import { keyframes } from "@emotion/react"

const carousel = keyframes`
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-50%);
    }
`

const carouselAlt = keyframes`
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-25%);
    }
`

const fade = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

const buttonTopAnimation = keyframes`
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translate(10px, 8px);
    }
`

const buttonBottomAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(-10deg);
    }
`

export {
    carousel,
    carouselAlt,
    buttonTopAnimation,
    buttonBottomAnimation,
    fade
}