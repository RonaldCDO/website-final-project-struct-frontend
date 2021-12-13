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


function App() {
  
  const [products, setProducts] = useState ([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const response = await api.get('/products/index')
    setProducts(response.data)
  }

  return (
    <>
      <Main_navbar/>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      {/* <Contact /> */}
      {/* <Main/> */}
      {/*<Sales />*/}
      <Menu products={products} />
      <Footer />
    </>
  );
}

export default App;
