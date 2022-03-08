import React from "react";
import Nav from "../components/Nav/Nav";
import Titulo from "../components/TituloImg/Titulo";
import Produtos from '../components/Produtos/Produtos'
import Cabelo from '../components/Produtos/Cabelo'
import Footer from "../components/Footer/Footer";

const Servico = () => {
    return(
        <div>
            <Nav/>
            <Titulo titulo='Nossos Serviços' texto='abaixo estão os nossos serviços'/>
            <Produtos/>
            <Cabelo/>
            <Footer/>
        </div>
    )
}
export default Servico;