import {Container} from './styles'
import Logo from '../../assets/Logo.png'
import Login from '../../assets/Login.png'
import { Link } from 'react-router-dom';


const Main_navbar = () => {


    return (
        <Container>
            <div >
                <Link to='/' class='batata'>
                    <div class = 'Logo'>
                        <img class="logo-img" src={Logo}></img>
                        <span>Forno Espacial</span>
                    </div>
                </Link>
                
            </div>

            <div class="links">
                <Link to='/Menu'>Cardápio</Link>
                <Link to='/Sales'>Promoções</Link>
                <Link to='/Contact'>Contato</Link>
            </div>

            <div>
                <Link to='/Login'><img class="login-img" src={Login}></img></Link>

            </div>
        </Container>
            
        
    );
}

export default Main_navbar;