import Product_Container from "../Product_Container";
import { Container } from "./styles";

const Products = ({products}) => {
    return (
        <Container>
             {products.map((item, index) => (
                 <Product_Container key={index} index={index} name={item.name} price={item.price} />
             ))}    

            {/* pq funcionou com parenteses ao inves de {} */}
        </Container>

    )
}

export default Products;