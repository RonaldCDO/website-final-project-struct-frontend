import styled from "styled-components"
import Fundo from '../../assets/fundo.jpeg'

export const Container = styled.div`
    z-index: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 27rem;
    height: 27rem;
    background-color: #B8CDE5;
    border-radius: 7%;

    h1 {
        color: #1C023E;
        font-size: 2.5rem;
        margin-top: 0.5rem;
        padding-top: 0;
        font-weight: 400;
    }

    .forms {
        margin: -1rem 0 4.5rem 0;
    }


    button {
        width: 10rem;
        height: 2.9rem;
        border-radius: 15px;
        border: none;
        background-color: #1C023E;
        color: white;
        font-size: 1.05rem;
        margin-top: -4rem;
        margin-bottom: 0.5rem;
    }

    button:hover {
        cursor: pointer;
        background-color: #120029;

    }

    a {
        text-decoration: none;
        color: #1C023E;
        margin-bottom: 0.35rem;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
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
