import Product_Container from "../../components/Product_Container";
import {Background} from "./style";

export const Menu = () => {
    return (
        <>
            <Background>
                <div class="container">
                    <div class="titulo"> 
                        <h1>PIZZAS SALGADAS</h1>
                    </div>
                    <div class="Product_Container">
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                    </div>

                    <div class="titulo"> 
                        <h1>PIZZAS DOCES</h1>
                    </div>
                    <div class="Product_Container">
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                        <Product_Container/>
                    </div>
                </div>
                
                
            </Background>
            
        </>

    );
}

export default Menu;