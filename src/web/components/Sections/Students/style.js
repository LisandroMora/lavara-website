import styled from "@emotion/styled";

const FasesSectionContainer = styled.section`
    padding: 0 30px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 15px;
        padding: 0 20px 30px;
    }
`;

const StudentsInfoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin: 50px 30px;

    .text {
        max-width: 50%;
        h2{
            font-size: clamp(100px, 10vw, 150px);
            font-weight: 100;
            color: var(--primary-bg-color);
            margin-bottom: 40px;
        }

        p{
            font-family: 'Avenir';
            font-size: clamp(18px, 1.5vw, 24px);
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        gap: 30px;
        margin: 30px 20px;

        .text{
            max-width: 100%;
            h2{
                margin-bottom: 20px;
            }
            ul{
                gap: 20px;
            }
        }
    }
`

const WinnersContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: -150px 30px 50px;

    .text {
        max-width: 50%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        h2{
            font-size: clamp(80px, 10vw, 150px);
            font-weight: 100;
            color: var(--primary-bg-color);
        }

        p{
            font-size: clamp(18px, 1.5vw, 24px);
            color: black;
            font-family: 'Avenir';
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 30px;
        margin: 30px 20px;

        .text{
            gap: 20px;
            max-width: 100%;
            h2{
                margin-bottom: 20px;
            }
        }
    }
`

const AccordionsSectionContainer = styled.section`
    margin: 0 30px 30px;

    @media (max-width: 768px){
        margin: 0 20px 20px;
    }
`

const PriceBannerContainer = styled.section`
    margin: 50px 30px;
    padding: 60px;
    background-color: var(--fifth-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;

    .price-banner{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;

        h3{
            font-size: clamp(80px, 10vw, 150px);
            color: white;
            font-weight: 100;

            &:last-of-type{
                color: var(--tertiary-bg-color);
            }
        }

        &__content{
            display: flex;
            flex-direction: column;
            gap: 2px;
            color: white;
            font-family: 'Avenir';
            font-size: clamp(18px, 1.5vw, 24px);
        }
    }

    @media (max-width: 768px){
        margin: 30px 20px;
        padding: 30px;

        .price-banner{
            flex-direction: column;
            gap: 20px;
            &__content{
                text-align: center;
            }
        }
    }
`

export {
    FasesSectionContainer,
    StudentsInfoContainer,
    WinnersContainer,
    AccordionsSectionContainer,
    PriceBannerContainer
}