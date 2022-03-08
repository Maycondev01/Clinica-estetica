import React from "react";
import Nav from "../components/Nav/Nav";
import Titulo from "../components/TituloImg/Titulo";
import Cabelo from '../components/Produtos/Cabelo'
import Footer from '../components/Footer/Footer'


const Cabelos = () => {
    return(
        <div>
            <Nav/>
            <Titulo Titulo='Cabelos' texto='Abaixo estão alguns modelos'/>
            <Cabelo/>
            <Footer/>
        </div>
    )
}
export default Cabelos;