import { Container } from "./styles";
import Logo from '../../assets/Logo.png';



const Footer = () => {

    return (

        <Container>
            <div class="conteudo-footer">
                <img src={Logo}></img>
                <span> Todos os direitos reservados a Forno Espacial LTDA | 2021 </span>
            </div>
        </Container>

    );
}

export default Footer;