import { Background, Container } from "./style";
import Input from '../../components/Input/';

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
                <a> Ainda não possui uma conta? Crie agora</a>
            </Container>
        </Background>
    );
}

export default Login;