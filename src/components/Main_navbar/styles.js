import styled from "styled-components"

export const Container = styled.nav`
    width: 100%;
    height: 3.5rem;
    background-color: #1C023E;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    

    a{
        text-decoration: none;
        font-size: 1.1rem;
        color: white;
        
    }

    span{
        text-decoration: none;
        font-size: 1.5rem;
        color: white;
        margin-left: 0.5rem;
        
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    div {
       margin: auto 1rem auto 1rem;
        
    }

    .links {
        display: flex;
        justify-content: space-between;
        width: 40rem;
        margin-right: 13rem;

    }

    .login-img {
        width: 2.25rem;
        height: 2rem;
        border-radius: 50%;
        
    }

    .logo-img {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;

    }

    .Logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .batata:hover{
        text-decoration:none;
    }
`;
    
