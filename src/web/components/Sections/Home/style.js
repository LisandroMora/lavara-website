import styled from "@emotion/styled"
import { buttonBottomAnimation, buttonTopAnimation, carousel, carouselAlt } from "src/animations/keyframes"


const InfoSectionContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 30px;
    gap: 50px;

    h2{
        width: 100%;
        font-size: clamp(100px, 12vw, 200px);
        font-weight: 100;
        line-height: 0.8;
        color: var(--primary-bg-color);
    }

    .info-section{
        max-width: 100%;
        p{
            font-size: clamp(18px, 1.8vw, 24px);
            font-weight: 100;
            line-height: 1.5;
            font-family: 'Avenir';
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        gap: 30px;
        padding: 50px 20px;
    }
`

const WinnerSectionContainer = styled.section`
    padding: 0 30px 30px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: stretch;
    gap: 24px;

    .winners-banner{
        width: 100%;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease;

            &:hover{
                filter: brightness(0.8);
                transform: scale(1.1);
                border-radius: 10px;
            }
        }

        .title{
            position: absolute;
            bottom: 20px;
            right: 20px;
            color: white;
            max-width: 800px;

            h2{
                font-size: clamp(100px, 15vw, 250px);
                font-weight: 100;
                line-height: 0.8;
                text-align: right;
            }
        }
    }

    .winners-section{
        display: flex;
        flex-direction: column;
        gap: 24px;

        a{
            text-decoration: none;
            
            .item{
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                gap: 24px;
                padding: 45px 30px 45px 75px;
                background-color: var(--secondary-bg-color);
                color: white;
                font-weight: 100;
                transition: all 0.3s ease;
                cursor: pointer;
    
                .border-svg {
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0; 
                    width: 100%;
                    pointer-events: none;
                    
                    rect {
                        fill: none;
                        stroke: transparent;
                        stroke-width: 3;
                        stroke-dasharray: 422, 0;
                        transition: all 0.35s linear;
                    }
                }
                
    
                h3{
                    font-size: clamp(100px, 12vw, 200px);
                    font-weight: 100;
                    line-height: 0.8;
                }
    
                img{
                    width: 62px;
                    height: 53px;
                }
    
            }
            
            &:nth-of-type(2){
                .item{
                    background-color: var(--fifth-bg-color);

                    &:hover{
                        background-color: white;
                        color: var(--fifth-bg-color);

                        .top{
                            fill: var(--fifth-bg-color);
                            animation: ${buttonTopAnimation} .5s forwards;
                        }

                        .bottom{
                            fill: var(--fifth-bg-color);
                            animation: ${buttonBottomAnimation} .5s forwards;
                        }

                        rect {
                            stroke: var(--fifth-bg-color);
                            stroke-width: 5;
                            stroke-dasharray: 80%, 90%;
                            stroke-dashoffset: 80%;
                            transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
                        }
                    }
                }
            }

            &:nth-of-type(1){
                .item{
                    &:hover{
                        background-color: white;
                        color: var(--secondary-bg-color);

                        .top{
                            fill: var(--secondary-bg-color);
                            animation: ${buttonTopAnimation} .5s forwards;
                        }

                        .bottom{
                            fill: var(--secondary-bg-color);
                            animation: ${buttonBottomAnimation} .5s forwards;
                        }

                        rect {
                            stroke: var(--secondary-bg-color);
                            stroke-width: 5;
                            stroke-dasharray: 80%, 90%;
                            stroke-dashoffset: 80%;
                            transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
                        }
                    }
                }
            }
        }

    }

    @media (max-width: 768px){
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 0 20px 30px;

        .winners-banner{
            min-height: 300px;
        }

        .winners-section{
            .item{
                padding: 30px 20px 30px 40px;       
            }
        }
    }
`

const AwardsSectionContainer = styled.section`
    position: relative;
    margin: 0 30px 30px;
    min-height: 100vh;

    overflow: hidden;
    .sticky {
        height: 100vh;
        padding: 50px;
        width: 100%;
        background-image: url('/assets/images/premios-bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        & .animation, .animation2 {
            width: 100%;
            height: 100%;
            position: absolute;

            & svg {
                opacity: 1;
                position: absolute;
                width: 300px;
                height: 300px;
            }
        }
    }

    .parallax{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        width: 90%;
        color: white;
    }

    .awards-title{
        position: absolute;
        top: 50PX;
        left: 50px;
        color: white;
        max-width: 800px;

        h2{
            font-size: clamp(100px, 12vw, 200px);
            font-weight: 100;
            line-height: 0.8;
        }
    }

    .bronze{
        position: absolute;
        top: 60%;
        left: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: white;
        width: clamp(100px, 10vw, 130px);
        transition: all 0.3s ease;

        p{
            font-size: clamp(18px, 1.5vw, 24px);
            font-family: 'Avenir';
        }
    }

    .silver{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: white;
        width: clamp(90px, 7vw, 112px);

        p{
            font-size: clamp(18px, 1.5vw, 24px);
            font-family: 'Avenir';
        }
    }

    .gold{
        position: absolute;
        top: 40%;
        right: 23%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: clamp(90px, 7vw, 114px);

        p{
            font-size: clamp(18px, 1.5vw, 24px);
            font-family: 'Avenir';
        }
    }

    @media (max-width: 768px){
        margin: 0 20px 30px;
        min-height: 65vh;

        .title{
            left: 20px;
            top: 20px;
        }

        .bronze{
            left: 5%;
        }

        .silver{
            top: 50%;
        }

        .gold{
            top: 42%;
            right: 5%;
        }

        .sticky{
            padding: 20px;
            height: 65vh;
        }

    }
`

const MarketSectionContainer = styled.section`
    padding: 0px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 70px;

    h2{
        width: 100%;
        font-size: clamp(100px, 12vw, 200px);
        font-weight: 100;
        line-height: 0.8;
        color: var(--primary-bg-color);
        text-align: center;
        text-transform: uppercase;
    }

    .flags{
        display: flex;
        justify-content: center;
        gap: 24px;

        animation: ${carousel} 20s linear infinite;

        img{
            width: 200px;
            height: 100px;
            object-fit: cover;
            transition: all 0.3s ease;

            &:hover{
                transform: scale(1.1);
                border-radius: 10px;
            }
        }
    }

    @media (max-width: 768px){
        gap: 30px;
        padding: 30px 0px;
    }
`

const SponsorsSectionContainer = styled.section`
    padding: 60px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        width: 100%;
        font-size: clamp(100px, 12vw, 200px);
        font-weight: 100;
        line-height: 0.8;
        color: var(--primary-bg-color);
        text-transform: uppercase;
        text-align: center;
    }

    .sponsors{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 24px;

        img{
            width: 250px;
            /* height: 100px; */
            object-fit: contain;
            transition: all 0.3s ease;

            &:hover{
                transform: scale(1.1);
                border-radius: 10px;
            }
        }
    }

    @media (max-width: 768px){
        gap: 30px;
        padding: 30px 0px;

        .sponsors{
            gap: 10px;

            img{
                width: 100px;
            }
        }
    }
`

const VaraTalksSectionContainer = styled.section`
    background: url('/assets/images/vara-talk-bg.jpg') no-repeat center center;
    background-size: cover;
    margin: 0 30px 30px;
    padding: 30px 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: hidden;

    .title-carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        animation: ${carouselAlt} 10s linear infinite;

        h2{
            width: max-content;
            font-size: clamp(80px, 10vw, 150px);
            font-weight: 100;
            line-height: 0.8;
            color: var(--primary-bg-color);
        }
    }

    .first-section{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 100px;

        .title{
            display: flex;
            flex-direction: column;
            gap: 10px;

            h2{
                font-size: clamp(100px, 12vw, 200px);
                font-weight: 100;
                line-height: 0.7;
                color: white;
            }

            h3{
                font-size: clamp(80px, 10vw, 150px);
                font-weight: 100;
                line-height: 0.7;
                color: var(--tertiary-bg-color);
            }
        }

        .judges{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }

        a{
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s ease;

                &:hover{
                    filter: brightness(0.9);
                    transform: scale(1.1);
                    border-radius: 10px;
                }
            }
        }
    }

    .second-section{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    @media (max-width: 768px){
        gap: 30px;
        padding: 30px 0px;
        margin: 0 20px 30px;

        .title-carousel{
            gap: 10px;
        }

        .first-section{
            gap: 10px;
            flex-direction: column;

            .title{
                gap: 5px;
            }

            .judges{
                gap: 10px;
            }

            a{
                width: 100%;
                max-width: 300px;
                img{
                    height: 100%;

                }
            }
        }

        .second-section{
            gap: 10px;
            justify-content: center;
        }

    }
`

export {
    InfoSectionContainer,
    WinnerSectionContainer,
    AwardsSectionContainer,
    MarketSectionContainer,
    SponsorsSectionContainer,
    VaraTalksSectionContainer
}