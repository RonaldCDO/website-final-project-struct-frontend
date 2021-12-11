import {Background} from "./style";
import Products from "../../components/Products";

export const Menu = ({products}) => {
    return (
        <>
            <Background>
                <div class="container">
                    <div class="titulo"> 
                        <h1>PIZZAS SALGADAS</h1>
                    </div>
                    <Products products={products} />
                </div>
                
                
            </Background>
            
        </>

    );
}

export default Menu;