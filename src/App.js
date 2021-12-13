import Main_navbar from "./components/Main_navbar";
import Footer from "./components/Footer";
import './Global.css'
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Sales from "./Pages/Sales";
import Main from "./Pages/Main";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";


function App() {
  
  const [products, setProducts] = useState ([])

  useEffect(() => {
    api.get('/products/index').then((response) => {
      setProducts(response.data)
    })
  }, [])

  return (
    <BrowserRouter>
      <Main_navbar/>
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
