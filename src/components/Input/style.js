import styled from "styled-components"


export const Container = styled.div`
   margin: 0.5rem;
   padding:0;

   input {
       width: ${props => props.batata === "Login" ? "18rem": "18rem" };
       height: ${props => props.batata === "Login" ? "3.2rem": "2rem" };
       border-radius: 15px;
       border: none;
       text-align: center;
       font-size: 1.05rem;
       margin: 0.5rem 0 0.5rem 0;
       margin: ${props => props.batata === "Login" ? "0.5rem 0 0.5rem 0": "0.1rem 0 0.1rem 0" };
   }
`;


