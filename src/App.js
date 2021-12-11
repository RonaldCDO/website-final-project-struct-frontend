import Main_navbar from "./components/Main_navbar";
import Footer from "./components/Footer";
import './Global.css'
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Contact from "./Pages/Contact";
import { Menu } from "./Pages/Menu";

function App() {
  return (
    <>
      <Main_navbar/>
      <Menu/>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
