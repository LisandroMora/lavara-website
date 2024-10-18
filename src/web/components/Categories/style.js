import styled from "@emotion/styled";

export const StyledCategoriesSection = styled.section`
    background-color: var(--fifth-bg-color);
    margin: 0 30px 30px;
    padding: 70px 40px;
    color: white;
    
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
    }

    .info{
        display: grid;
        place-items: center;
        margin-top: 50px;
        max-height: 0;
        overflow: hidden;
        transition: 1.3s;

        &.active{
            max-height: 100%;
        }

        p{
            font-size: clamp(16px, 1.5vw, 24px);
            font-weight: 100;
            font-family: 'Avenir';
            text-align: center;
        }
    }

    .title {
        display: block;
        width: 40%;
        h2 {
            font-size: clamp(100px, 10vw, 150px);
            font-weight: 100;
        }
    }

    .categories {
        display: flex;
        gap: 30px 24px;
        flex-wrap: wrap;

        .category {
            background-color: transparent;
            padding: 20px 15px;
            color: white;
            font-size: clamp(16px, 1.5vw, 24px);
            font-weight: 100;
            font-family: 'Avenir';
            border: 2px solid white;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: white;
                color: var(--fifth-bg-color);
            }

            &.active {
                background-color: white;
                color: var(--fifth-bg-color);
            }

            &.external-button{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 30px;
                font-family: 'Knockout';
                font-size: clamp(30px, 3vw, 42px);
                text-decoration: none;
                background-color: white;
                color: var(--fifth-bg-color);
                
                &:hover{
                    color: white;
                    background-color: var(--fifth-bg-color);
                }
            }
        }
    }

    @media (max-width: 768px){
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px 20px;

        .content {
            flex-direction: column;
            width: 100%;
            gap: 20px;
        }

        .title {
            width: 100%;
        }

        .categories {
            width: 100%;
            gap: 20px;
            justify-content: center;
        }
    }
`