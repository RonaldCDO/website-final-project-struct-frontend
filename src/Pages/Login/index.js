import { Background, Container } from "./style";
import Input from '../../components/Input/';
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <Background >
            <Container>
                <h1>Login</h1>
                <div class="forms">
                    <Input placeholder="e-mail" type="email" format="Login" />
                    <Input placeholder="senha" type="text" format="Login" />
                </div>
                <button> Enviar </button>
                <Link to='/Cadastro'>Ainda não possui uma conta? Crie agora</Link>
            </Container>
        </Background>
    );
}

export default Login;