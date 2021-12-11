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
        max-width: 45rem;
        
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

    .Product_Container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
    }

`;