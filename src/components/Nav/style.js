import styled from "@emotion/styled";

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    gap: 50px;
    min-height: 130px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: white;

    .logo {
        transition: all .5s ease-in-out;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        justify-content: flex-end;

        .nav-link {
            display: flex;
            align-items: center;
            gap: 20px;
            width: 85%;

            .link{
                position: relative;
                width: 25%;

                a {
                    display: block;
                    width: 100%;
                    text-decoration: none;
                    color: white;
                    transition: color 0.3s;
                    padding: 20px;
                    font-size: clamp(2rem, 2.5vw, 2.625rem);
                    font-weight: 100;
                    transition: all .3s ease-in-out;
                    cursor: pointer;
                }

                &.disabled{
                    opacity: 0.5;
                    pointer-events: none
                }

                &:nth-of-type(1){
                    a{
                        background-color: var(--primary-bg-color);
                    }
                }

                &:nth-of-type(2){
                    a{
                        background-color: var(--secondary-bg-color);
                    }
                }

                &:nth-of-type(3){
                    a{
                        background-color: var(--tertiary-bg-color);
                    }
                }

                &:nth-of-type(4){
                    a{
                        background-color: var(--fifth-bg-color);
                    }
                }

                &:nth-of-type(5){
                    a{
                        background-color: var(--fourth-bg-color);
                    }
                }


                svg {
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0; 
                    width: 100%;
                    pointer-events: none;
                }
                
                rect {
                    fill: none;
                    stroke: #fff;
                    stroke-width: 2;
                    stroke-dasharray: 422, 0;
                    transition: all 0.35s linear;
                }

                &:hover{
                    a{
                        background-color: transparent;
                        text-align: center;
                    }
                    &:nth-of-type(1){
                        a{
                            color: var(--primary-bg-color);
                            transform: scale(1.1);
                        }

                        rect{
                            stroke: var(--primary-bg-color);
                        }
                    }
                    &:nth-of-type(2){
                        a{
                            color: var(--secondary-bg-color);
                            transform: scale(1.1);
                        }

                        rect{
                            stroke: var(--secondary-bg-color);
                        }
                    }
                    &:nth-of-type(3){
                        a{
                            color: var(--tertiary-bg-color);
                            transform: scale(1.1);
                        }

                        rect{
                            stroke: var(--tertiary-bg-color);
                        }
                    }
                    &:nth-of-type(4){
                        a{
                            color: var(--fifth-bg-color);
                            transform: scale(1.1);
                        }

                        rect{
                            stroke: var(--fifth-bg-color);
                        }
                    }
                    &:nth-of-type(5){
                        a{
                            color: var(--fourth-bg-color);
                            transform: scale(1.1);
                        }

                        rect{
                            stroke: var(--fourth-bg-color);
                        }
                    }
                    
                    rect {
                        stroke-width: 5;
                        stroke-dasharray: 80%, 90%;
                        stroke-dashoffset: 80%;
                        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                }
            }
        }

        .close-icon {
            position: absolute;
            top: 0;
            right: 0;
            padding: 20px;
            cursor: pointer;
            display: none;
        }
    }

    &.scrolled {
        background-color: white;
        padding: 10px 30px;
        min-height: 80px;
        transition: all .5s ease-in-out;

        .logo {
            transform: scale(.8);
        }

        nav {
            .nav-link {
                justify-content: flex-end;
                .link {
                    width: 20%;
                    max-width: 200px;
                    a {
                        font-size: 34px;
                        padding: 10px;
                    }
                }
            }
        }
    }

    .mobile-menu {
        display: none;
        cursor: pointer;
    }

    @media (max-width: 768px){
        padding: 20px;
        min-height: 80px;

        .logo {
            padding: 0;
            margin: 0;

            img {
                width: 130px !important;
            }
        }

        nav{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: white;
            z-index: 10;
            justify-content: center;
            display: none;
            flex-direction: column;

            .close-icon {
                display: block;
            }

            .nav-link {
                flex-direction: column;
                gap: 0px;
                width: 100%;

                .link {
                    width: 100%;

                    a {
                        font-size: 24px;
                        padding: 20px;
                    }

                    &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5){
                        a{
                            background-color: white;
                            color: var(--primary-bg-color);
                            border-bottom: 1px solid var(--primary-bg-color);
                            font-size: 80px;
                            text-align: center;
                        }
                    }

                }

                svg {
                    display: none;
                }

            }

        }

        ${({ isOpen }) => isOpen && `
            nav {
                display: flex;
            }
        `}

        .mobile-menu {
            display: block;
        }

        &.scrolled {
            padding: 10px 20px;

            .logo {
                transform: none;
            }

            nav {
                .nav-link {
                    justify-content: center;
                    .link {
                        width: 100%;
                        max-width: 100%;
                        a {
                            font-size: 80px;
                            padding: 20px;
                        }
                    }
                }
            }
        }
    }
`