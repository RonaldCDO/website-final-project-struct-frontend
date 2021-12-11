import { Container } from "./style";

const Product_Container = () => {
    return (
        <Container>
            <img src={'https://source.unsplash.com/random?profile'} alt = "Pizza"/>
            <span>Frango c/ catupiry</span>
            <span>R$30.00</span>
        </Container>
    )
}

export default Product_Container;