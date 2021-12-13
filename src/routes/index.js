import React from "react";
import { Route, Routes } from "react-router";
import Cadastro from "../Pages/Cadastro";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Main from "../Pages/Main";
import Menu from "../Pages/Menu";
import Sales from "../Pages/Sales";
import { useEffect, useState } from "react";
import { api } from "../services/api";

const Rotas = () => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
      fetchProducts()
    }, [])
  
    const fetchProducts = async () => {
      const response = await api.get('/products/index')
      setProducts(response.data)
    }

    return (
        <Routes> 
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Cadastro" element={<Cadastro/>}/>
            <Route exact path="/Menu" element={<Menu products={products}/>}/>
            <Route exact path="/Sales" element={<Sales/>}/>
        </Routes>
    )
}

export default Rotas;