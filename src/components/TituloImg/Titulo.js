import React, { Component } from "react";
import './TituloEst.css'

class Titulo extends Component {
    render() {
        return (
             <div className="heroi-img">
                 <div className="cabecalho">
                     <h1>{this.props.titulo}</h1>
                     <p>{this.props.texto}</p>
                 </div>
             </div>
        );
    }
}

export default Titulo;