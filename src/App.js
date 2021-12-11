import Main_navbar from "./components/Main_navbar";
import Footer from "./components/Footer";
import './Global.css'
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Sales from "./Pages/Sales";
import Main from "./Pages/Main";


function App() {
  return (
    <>
      <Main_navbar/>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      {/* <Contact /> */}
      {/* <Main/> */}
      {/*<Sales />*/}
      <Menu/>
      <Footer />
    </>
  );
}

export default App;
