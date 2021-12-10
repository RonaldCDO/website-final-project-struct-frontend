import {Container} from './styles'
import Logo from '../../assets/Logo.png'
import Login from '../../assets/Login.png'


const Main_navbar = () => {

    return (
        <Container>
            <div>
                <img class="logo-img" src={Logo}></img>
            </div>

            <div class="links">
                <a href="#" > Cardápio </a>
                <a href="#" > Promoções </a>
                <a href="#" > Contato</a>
            </div>

            <div>
                <img class="login-img" src={Login}></img>
            </div>
        </Container>
            
        
    );
}

export default Main_navbar;