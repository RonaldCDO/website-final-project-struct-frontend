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

    a:hover {
        cursor: pointer;
        color: grey;
        text-decoration: underline;
    }

    div {
       margin: auto 1rem auto 1rem;
        
    }

    .links {
        display: flex;
        justify-content: space-between;
        width: 40rem;

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
`;
    
