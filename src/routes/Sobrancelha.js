import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Produtos from "../components/Produtos/Produtos";
import Titulo from "../components/TituloImg/Titulo";



const Sobrancelha = () => {
    return(
        <div>
            <Nav/>
            <Titulo titulo='Sobrancelhas' texto='Abaixo estão alguns modelos de sobrancelhas'/>
            <Produtos/>
            <Footer/>
        </div>
    )
}
export default Sobrancelha;