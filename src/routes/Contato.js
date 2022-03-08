import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Titulo from "../components/TituloImg/Titulo";
import Form from '../components/Form/Form'


const Contato = () => {
    return(
        <div>
            <Nav/>
            <Titulo titulo='Página de Contato' texto="Preencha o formulário abaixo" />
            <Form/>
            <Footer/>
        </div>
    )
}
export default Contato;