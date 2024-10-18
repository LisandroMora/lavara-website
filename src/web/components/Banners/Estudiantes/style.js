import styled from "@emotion/styled";
import { buttonBottomAnimation, buttonTopAnimation, fade } from "src/animations/keyframes";

export const StyledEstudiantesBanner = styled.div`
    background-image: url('/assets/images/students-banner.jpg');
    background-size: cover;
    background-position: center;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: white;

    h1{
        font-size: clamp(130px, 13vw, 150px);
        font-weight: 100;
        line-height: 0.8;
        animation: ${fade} 2s forwards;

        span{
            color: var(--tertiary-bg-color);
        }
    }

    .counter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            font-size: clamp(24px, 2.5vw, 40px);
            font-family: 'Avenir';
        }

        .number{
            display: flex;
            gap: 20px;

            span{
                font-size: clamp(70px, 7vw, 100px);
                font-weight: 100;
            }
        }
    }
    
    @keyframes l3 {
        100% {background-position: right -30px top 0}
    }

    .loader {
        margin-top: 30px;
        width: 120px;
        height: 20px;
        transform: skewX(-45deg);
        background: 
            linear-gradient(#f03355 0 0) left -30px top 0/30px 20px no-repeat 
            #fff;
        animation: l3 1s infinite linear;
    }


    @media (max-width: 768px){
        padding: 0 50px;
        h1{
            text-align: center;
        }
    }

`;

export const BannerContainer = styled.div`
    margin: 0 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .buttons-section{
        display: flex;
        gap: 24px;

        a{
            text-decoration: none;
            width: 100%;
            .item{
                position: relative;
                width: 100%;
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
    
                h3{
                    font-size: clamp(70px, 10vw, 150px);
                    font-weight: 100;
                    line-height: 0.8;
                }
    
                img{
                    width: 62px;
                    height: 53px;
                }
    
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

            &:nth-of-type(2){
                .item{
                    background-color: var(--primary-bg-color);

                    &:hover{
                        background-color: white;
                        color: var(--primary-bg-color);
    
                        .top{
                            fill: var(--primary-bg-color);
                            animation: ${buttonTopAnimation} .5s forwards;
                        }
    
                        .bottom{
                            fill: var(--primary-bg-color);
                            animation: ${buttonBottomAnimation} .5s forwards;
                        }
    
                        rect {
                            stroke: var(--primary-bg-color);
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
        margin: 0 0 30px;

        .buttons-section{
            padding: 0 20px;
            flex-direction: column;
            gap: 24px;

            .item{
                padding: 35px 30px;
                gap: 24px;
                align-items: center;

                img{
                    width: 62px;
                    height: 53px;
                }
            }
        }
    }
`