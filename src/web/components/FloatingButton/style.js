import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const StyledFloatingButton = styled.div`
	position: fixed;
	bottom: 30px;
	left: 5%;
	z-index: 1000;
    width: clamp(100px, 15vw, 230px);
    animation: ${rotation} 15s linear infinite;
    transition: all ease .3s;

    &.isAtBottom{
        left: -100%;
    }
    

    .image-container {
        position: relative;
        animation: ${fadeIn} 2s;

        .button-letters {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            height: 90%;
            .image-container {
                width: 100%;
                height: 100%;

                &:hover {
                    animation-play-state: paused;
                }
            }

        }
    }
`