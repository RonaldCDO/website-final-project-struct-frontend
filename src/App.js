import Main_navbar from "./components/Main_navbar";
import Footer from "./components/Footer";
import './Global.css'
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Contact from "./Pages/Contact";
import Sales from "./Pages/Sales"

function App() {
  return (
    <>
      <Main_navbar/>
      {/* <Login /> */}
      {/* <Cadastro /> */}
      {/* <Contact /> */}
      <Sales />
      <Footer />
    </>
  );
}

export default App;
