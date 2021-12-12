import Product_Container from "../Product_Container";
import { Container } from "./styles";

const Products = ({products, type_id}) => {

    const arr = []
    products.map((item,index) => {
        if (item.type_id == type_id){
            arr.push(item)
        }
    })


    return (
        <Container>
             {arr.map((item, index) => (
                 <Product_Container key={index} index={index} name={item.name} price={item.price} photo={item.photo_url}/>
             ))}    

            {/* pq funcionou com parenteses ao inves de {} */}
        </Container>

    )
}

export default Products;