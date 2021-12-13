import React from "react";
import { Route, Routes } from "react-router";
import Cadastro from "../Pages/Cadastro";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Main from "../Pages/Main";
import Menu from "../Pages/Menu";
import Sales from "../Pages/Sales";


const Rotas = () => {
    return (
        <Routes> 
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Cadastro" element={<Cadastro/>}/>
            <Route exact path="/Menu" element={<Menu/>}/>
            <Route exact path="/Sales" element={<Sales/>}/>
        </Routes>
    )
}

export default Rotas;