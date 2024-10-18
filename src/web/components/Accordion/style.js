import styled from "@emotion/styled";

export const AccordionStyled = styled.div`
    .accordion {
        padding: 50px 0;
        width: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        border-top: 5px solid var(--fifth-bg-color);
        border-bottom: 5px solid var(--fifth-bg-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 100px;
        font-size: clamp(50px, 9vw, 100px);
        font-weight: 100;
        color: var(--primary-bg-color);
        font-family: 'Knockout';
        transition: all 0.3s ease;

        &:nth-of-type(1){
            border-top: none;
        }
    }
    .panel{
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        padding: 0;
        font-family: 'Avenir';
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        ul{
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        a{
            text-decoration: none;
        }
    }
    
    ${({ active }) => active && `

        .accordion{
            border-bottom: none;

            .top{
                transition: all 0.2s;
                transform-origin: center;
                transform: rotate(65deg);
                opacity: 0;
            }
        }

        .panel{
            padding: 20px 0;
        }
    `}
`