import { Background, Container } from "./style";
import Input from '../../components/Input';
import { Link } from "react-router-dom";

const Cadastro = () => {

    return (
        <Background>
            <Container>
                <h1>Cadastro</h1>
                <div class="forms">
                    <Input placeholder="e-mail" format="Cadastro"/>
                    <Input placeholder="nome" format="Cadastro"/>
                    <Input placeholder="endereço" format="Cadastro"/>
                    <Input placeholder="número de celular" format="Cadastro"/>
                    <Input placeholder="senha" format="Cadastro"/>
                    <Input placeholder="confirmar senha" format="Cadastro"/>
                </div>
                <button>Cadastrar</button>
                <Link to='/Login'> Já possui uma conta? Faça login.</Link>
            </Container>
        </Background>

    );
}

export default Cadastro;