import { Container } from "./style";

const Product_Container = ({name, price, photo}) => {
    return (
        <Container>
            <img src={`http://localhost:3000${photo}`} alt = "Pizza"/>
            <span>{name}</span>
            <span>{price}</span>
        </Container>
    )
}

export default Product_Container;