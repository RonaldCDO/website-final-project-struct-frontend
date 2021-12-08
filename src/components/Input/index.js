import { Container } from './style'

const Input = ({format, ...props}) => {

    return (
        <Container batata = {format} >
            <input {...props} />
        </Container>
    );

}

export default Input