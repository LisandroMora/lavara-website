const { default: styled } = require("@emotion/styled");

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

const InscriptionsInfoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 50px 30px;

    img{
        transition: all 1s ease-in-out;
        &:hover{
            transform: scale(1.1);
            filter: brightness(0.5);
        }
    }

    .text {
        max-width: 50%;
        h2{
            font-size: clamp(100px, 10vw, 150px);
            font-weight: 100;
            color: var(--fifth-bg-color);
            margin-bottom: 40px;
        }

        ul{
            display: flex;
            flex-direction: column;
            gap: 30px;
            color: black;
            font-family: 'Avenir';
            padding-left: 20px;
            
            li{
                font-size: clamp(18px, 1.5vw, 24px);
            }
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

const ParticipantsContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 50px 30px;

    img{
        transition: all 1s ease-in-out;
        &:hover{
            transform: scale(1.1);
            filter: brightness(0.5);
        }
    }

    .text {
        max-width: 50%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        h2{
            font-size: clamp(80px, 10vw, 150px);
            font-weight: 100;
            color: var(--fifth-bg-color);
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

export {
    FasesSectionContainer,
    InscriptionsInfoContainer,
    ParticipantsContainer,
    AccordionsSectionContainer
}