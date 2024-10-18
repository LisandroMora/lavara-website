import styled from "@emotion/styled";

export const StyledJudgeCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 250px;
    width: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: var(--fifth-bg-color);
    }
    h3{
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: clamp(40px, 4vw, 60px);
        font-family: 'Knockout';
        font-weight: 100;
    }
    span{
        font-size: 14px;
        font-family: 'Avenir';  
        font-weight: 900;
        padding: 3px;
    }

    ${({isFirst}) => isFirst && `
        h3{
            background-color: var(--fifth-bg-color);
            color: white;
            padding: 5px;
        }
    `}
`

export const StyledJudgeSection = styled.section`
    background-color: var(--secondary-bg-color);
    margin: 0 30px 30px;
    padding: 60px;

    .judges-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px 8px;
        flex-wrap: wrap;
    }

    h2{
        font-size: clamp(100px, 12vw, 200px);
        font-weight: 100;
        line-height: 0.8;
        margin-bottom: 50px;
        color: white;

        span{
            color: var(--tertiary-bg-color);
        }
    }

    @media screen and (max-width: 768px){
        margin: 0 20px 20px;
        padding: 40px;

        .judges-container{
            justify-content: center;
        }
    }
`