import styled from "styled-components"
import Fundo from '../../assets/fundo.jpeg'

export const Container = styled.div`
    z-index: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 27rem;
    height: 27rem;
    background-color: #B8CDE5;
    border-radius: 7%;

    h1 {
        color: #1C023E;
        font-size: 1.7rem;
        padding-top: 0;
        margin: 0.2rem 0 0.2rem 0;
        font-weight: 400;
    }

    .titulo {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    img {
        width: 3.1rem;
        height: 3.1rem;
    }

    span {
        color: #1C023E;
        font-size: 1.2rem;
        margin-left: 0.3rem;
    }

    .insta-wpp {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: -1rem;

    }

    .social-media {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }
    
    .facebook-gmail {
        display: flex;
        justify-content: left;
        width: 100%;
        margin-left: 2.2rem;
    }
`;

export const Background = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    background: url('${Fundo}') no-repeat;
    background-size: cover;
`;

