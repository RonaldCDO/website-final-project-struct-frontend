import { Background, Container } from "./style";
import Instagram from "../../assets/instagram.png";
import Whatsapp from "../../assets/whatsapp-icon.png";
import Facebook from "../../assets/facebook.jpg";
import Gmail from "../../assets/email.png";

export const Contact = () => {

    return(
        <Background>
            <Container>
            <div class="titulo">
                <h1> Entre em contato conosco </h1>
                <h1> através de nossas redes  </h1>
                <h1>sociais</h1>
            </div>

            <div class="insta-wpp">
                <div class="social-media">
                    <a href="https://web.whatsapp.com/">
                    <img src={Whatsapp}></img>
                    <span>(61)99875-9089</span>
                    </a>
                </div>
                <div class="social-media">
                <a href="https://www.instagram.com/">
                    <img src={Instagram}></img>
                    <span>@fornoespacial</span>
                    </a>
                </div>
            </div>
            
            <div class="facebook-gmail"> 
                <a href="https://www.facebook.com/">
                    <img src={Facebook}></img>
                    <span>www.facebook.com/FornoEspacial</span>
                </a>
            </div>

            <div class="facebook-gmail"> 
                <a href="https://mail.google.com/mail/u/0/#inbox">
                    <img src={Gmail}></img>
                    <span>fornoespacialbsb@gmail.com</span>
                </a>
            </div>

            </Container>
        </Background>
    );
}

export default Contact;