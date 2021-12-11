import {Background} from "./style";
import Rodizio from "../../assets/FE_images/FE_Rodízio.jpg";
import Terça_em_dobro from "../../assets/FE_images/Terça_em_dobro.jpg"
import HH from "../../assets/FE_images/HH.jpg";

export const Sales = () => {


    return (

        <Background>
            <div class="container">
                <div class="titulo"> 
                    <h1>Promoções</h1>
                </div>
                <div class="rodizio">
                    <a>
                        <img src={Rodizio} class="img-rodizio"></img>
                    </a>
                </div>
                <div class="terças-em-dobro"> 
                    <a>
                        <img src={Terça_em_dobro} class="img-terça-em-dobro"></img>
                    </a>
                </div>
                <div class="happy-hour">
                    <a>
                        <img src={HH} class="img-HH"></img>
                    </a>
                </div>
            </div>
        </Background>

    );
}

export default Sales;