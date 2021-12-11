import { Container } from "./style";

const Product_Container = ({name, price}) => {
    return (
        <Container>
            <img src={'https://source.unsplash.com/random?profile'} alt = "Pizza"/>
            <span>{name}</span>
            <span>{price}</span>
        </Container>
    )
}

export default Product_Container;