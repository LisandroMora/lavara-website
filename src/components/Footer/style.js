import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    background-color: var(--secondary-bg-color);
    margin: 0 30px 30px;
    padding: 80px;

    footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        font-family: 'Avenir';

        .contact{
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: white;

            a{
                color: white;
                text-decoration: none;
                font-size: clamp(18px, 1.5vw, 24px);
                font-weight: 100;
            }

            .address{
                p{
                    font-size: clamp(18px, 1.5vw, 24px);
                    font-weight: 100;
                }
            }

            .phone{
                display: flex;
                flex-direction: column;
                a{
                    font-size: clamp(18px, 1.5vw, 24px);
                    font-weight: 900;
                }
            }
        }

        .logo{
            img{
                max-width: 200px;
            }
        }

        .social{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            .social-icons{
                display: flex;
                gap: 20px;

                a{
                    svg{
                        fill: white;
                        transition: all 0.3s ease;

                        &:hover{
                            transform: scale(1.1);
                        }
                    }
                }
            }

            .mail{
                a{
                    color: white;
                    font-size: clamp(18px, 1.5vw, 24px);
                    font-weight: 100;
                    text-decoration: none;
                }
            }
        }
    }

    @media (max-width: 768px){
        padding: 40px;
        margin: 0 0 30px;

        footer{
            grid-template-columns: 1fr;
            gap: 20px;

            .contact{
                .phone{
                    a{
                        font-size: 20px;
                    }
                }

                .address{
                    p{
                        font-size: 20px;
                    }
                }
            }

            .social{
                .social-icons{
                    a{
                        svg{
                            width: 30px;
                            height: 30px;
                        }
                    }
                }

                .mail{
                    a{
                        font-size: 20px;
                    }
                }
            }
        }
    }
`;