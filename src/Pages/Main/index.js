import { Background, Container } from "./style";
import FE_logo from "../../assets/FE_images/FE_logo.png";
import M_rodizio from "../../assets/m-rodizio.png";
import happy_hour from "../../assets/happy.png";
import terca from "../../assets/terca.png";
import chopps from "../../assets/chopps.png";
import combos from "../../assets/ultima.png";

const Main = () => {
    return(
        <Background>
            
            <div class="logo-container">
                <img src={FE_logo}></img>
            </div>
            
            
            <Container>
               
                <div class ='line_one'>
                    <div class ='div-one'>
                        <a>
                            <img src={M_rodizio} class="m-image-one"></img>
                        </a>
                    </div>
                    <div class = 'div-two'>
                        <a>
                            <img src={happy_hour} class="m-image-two"></img>
                        </a>
                    </div>
                </div>
                
                <div class ='line_two'>
                    <div class = 'div-three'> 
                        <a>
                            <img src={terca} class="m-image-one"></img>
                        </a>
                    </div>
                    <div class = 'div-four'> 
                        <a>
                            <img src={chopps} class="m-image-two"></img>
                        </a>
                    </div>
                </div>
                
                <div class ='line_three'>
                    <div class = 'div-five'>
                        <a>
                            <img src={combos} class="m-image-three"></img>
                        </a>
                    </div>
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