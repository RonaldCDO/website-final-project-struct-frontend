import { Background, Container } from "./style";
import FE_logo from "../../assets/FE_images/FE_logo.png";

const Main = () => {
    return(
        <Background>
            
            <div class="logo-container">
            <img src={FE_logo}>
            </img>
            </div>
            
            
            <Container>
               
                <div class ='line_one'>
                    <div class ='div-one'>Rodizio</div>
                    <a>

                    </a>
                    <div class = 'div-two'>Happy Hour</div>
                    <a>

                    </a>
                </div>
                <div class ='line_two'>
                    <div class = 'div-three'> Terça em Dobro </div>
                    <a>

                    </a>
                    <div class = 'div-four'> Chopps </div>
                    <a>

                    </a>
                </div>
                <div class ='line_three'>
                    <div class = 'div-five'> Combos </div>
                    <a>

                    </a>
                </div>
            
            </Container>
            <div class='slogan-container'>    
            <span>
                A pizza que te leva ao espaço!
            </span>
            </div>  
        </Background>
    );
}

export default Main;