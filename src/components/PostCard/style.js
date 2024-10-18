import styled from "@emotion/styled";

export const PostCardS = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    background-color: var(--primary-text-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

    .post-info {
        display: flex;
        flex-direction: column;
        height: 250px;
        padding: 25px;
        gap: 10px;

        h3 {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--tertiary-text-color);
        }

        p {
            font-size: 12px;
            color: var(--secondary-text-color);

        }
    }
    .post-image{
        width: 100%;
        max-height: 200px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .read-more{
        position: absolute;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-text-color);
        padding: 10px;
        font-size: 12px;
        color: var(--tertiary-text-color);
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            background-color: var(--tertiary-bg-color);
            color: var(--primary-text-color);
        }
    }
`;

export const PostContainerS = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    justify-items: center;
`;