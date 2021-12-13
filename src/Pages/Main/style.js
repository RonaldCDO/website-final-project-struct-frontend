import styled from "styled-components"
import Fundo from '../../assets/fundo.jpeg'

export const Container = styled.section`
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 45rem;
    height: 44.25rem;
    /* background-color: #B8CDE5; */
    border-radius: 7%;
 
    .line_one{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 1rem;
    }

    .div-one{
        font-size: 1.05rem;
        width: 30rem;
        height: 13.5rem;
        border-radius: 15px;
        border: none;
        background-color: #1C023E;
        color: white;
    }
    .div-two{
        font-size: 1.05rem;
        width: 14.0rem;
        height: 13.5rem;
        border-radius: 15px;
        border: none;
        background-color: #1C023E;
        color: white;
        margin-right: -0.5rem;
    }

    .line_two{
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .div-three{
        font-size: 1.05rem;
        width: 30rem;
        height: 13.5rem;
        border-radius: 15px;
        border: none;
        background-color: #1C023E;
        color: white;
    }

    .div-four{
        font-size: 1.05rem;
        width: 14.0rem;
        height: 13.5rem;
        border-radius: 15px;
        border: none;
        background-color: #1C023E;
        color: white;
        margin-right: -0.5rem;
    }

    .line_three{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .div-five{
        /* margin-top: 0.5rem; */
        font-size: 1.05rem;
        width: 45rem;
        height: 13.5rem;
        border-radius: 15px;
        border: none;
        background-color: #1C023E;
        color: white;
    }


`;
export const Background = styled.section`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    background: url('${Fundo}') no-repeat;
    background-size: cover;
    
    
    img {
        width: 13rem;
        height: auto;
    }

    .logo-container {
        width: 13rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        color:white;
        font-size: 2.8rem;
        text-align: center;
    }

    .slogan-container{
        width: 13rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
`;