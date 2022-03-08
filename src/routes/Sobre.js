import React from "react";
import Nav from "../components/Nav/Nav";
import Video from "../components/Sobre/Video";
import Titulo from '../components/TituloImg/Titulo'
import Footer from '../components/Footer/Footer'


const Sobre = () => {
    return(
        <div>
            <Nav/>
            <Titulo titulo='Sobre' texto='Sobre nossa equipe'/>
            <Video/>
            <Footer/>
        </div>
    )
}

export default Sobre;