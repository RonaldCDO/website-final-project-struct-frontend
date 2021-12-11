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
                    <Products products={products} type_id="1" />


                    <div class="titulo"> 
                        <h1>PIZZAS DOCES</h1>
                    </div>
                    <Products products={products} type_id="2" />

                    <div class="titulo"> 
                        <h1>PIZZAS VEGETARIANAS</h1>
                    </div>
                    <Products products={products} type_id="3" />

                    <div class="titulo"> 
                        <h1>BEBIDAS ALCOÓLICAS</h1>
                    </div>
                    <Products products={products} type_id="4" />

                    <div class="titulo"> 
                        <h1>BEBIDAS NÃO ALCOÓLICAS</h1>
                    </div>
                    <Products products={products} type_id="5" />

                </div>
                
            </Background>
            
        </>

    );
}

export default Menu;