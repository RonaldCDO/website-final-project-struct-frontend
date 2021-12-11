import styled from "styled-components";


export const Background = styled.section`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
box-sizing: border-box;
background-color: #B8CDE5;

    
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 7rem;
        margin-bottom: 5rem;
    }

    .titulo {
        background-color: #1C023E;
        width: 45rem;
        height: 3rem;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
    }

    .titulo h1 {
        color: white;
        font-size: 2.2rem;
        font-weight: 300;
    }

    .rodizio {
        width: 45rem;
        height: 30rem;
        border-radius: 15px;
        margin-bottom: 0.5rem;
    }

    .img-rodizio {
        width: 45rem;
        height: 30rem;
        border-radius: 15px;
    }

    .terças-em-dobro {
        width: 45rem;
        height: 17.62rem;
        border-radius: 15px;
        margin-bottom: 0.5rem;
    }

    .img-terça-em-dobro {
        width: 45rem;
        height: 17.62rem;
        border-radius: 15px;
    }

    .happy-hour {
        width: 45rem;
        height: 30rem;
        border-radius: 15px;
        margin-bottom: 0.5rem;
    }

    .img-HH {
        width: 45rem;
        height: 30rem;
        border-radius: 15px;
    }

    a:hover {
        cursor: pointer;
    }

`;