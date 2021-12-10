import styled from "styled-components"

export const Container = styled.footer `

    width: 100%;
    height: fit-content;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: rgba(0,0,0,0.4);

    span {
        color: white;
    }


    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
`;