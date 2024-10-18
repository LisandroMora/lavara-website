import styled from "@emotion/styled";

export const StyledFaseCard = styled.div`
    width: 100%;
    background-color: #F5F5F5;
    padding: 50px 40px;
    text-transform: uppercase;
    line-height: 0.8;
    transition: all 0.3s ease;

    &:hover{
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }

    h3 {
        font-size: clamp(40px, 4vw, 60px);
        font-weight: 100;
        color: #5F5858;
    }

    P{
        font-size: clamp(40px, 4vw, 60px);
        font-weight: 100;
        color: #B5B5B5;
    }

    @media (max-width: 768px){
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;