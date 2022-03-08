import React from "react";
import { Link } from "react-router-dom";
import fundo from '../../assets/fundo.png'
import './TelaEst.css'


const TelaInicio = () => {
    return(
        <div className="tela-inicio">
                <div className="titulo">
                    <h1>Clínica Estética Recife</h1>
                    <p>Conheça nossos serviços e produtos</p>
                </div>
                <div className="corpo">
                    <div className="card">
                        <h3>Serviços</h3>
                        <span className="barra"></span>
                        <p>Micropigmentação de Sobrancelhas</p>
                        <p>Limpeza de Pele</p>
                        <p>Peeling de Cristal</p>
                        <p>Peeling de Diamante</p>
                        <p>Drenagem Linfática</p>
                        <p>Crioterapia</p>
                        <p>PowerShape</p>
                        <p>Peeling Ultrasônico</p>
                        <p>Eletroestimulação</p>
                        <p>Cabelos</p>
                        <p>Maquiagem</p>
                        <Link to='/contato' className="btn1">Contato</Link>
                    </div>
                    <div className="card">
                        <h3>Depilação a laser</h3>
                        <span className="barra"></span>
                        <p>O laser LightSheer® é o laser mais seguro e eficaz para remoção definitiva de pêlos indesejáveis e excessivos, aliando tecnologia avançada, resultados altamente satisfatórios e segurança.</p> <br/>
                        <p>Ele é delicado para tratar os pêlos femininos e forte suficiente para os pêlos masculinos.</p> <br/>
                        <Link to='/contato' className="btn2">Contato</Link>
                    </div>
                    <div className="card">
                        <h3>Quem somos</h3>
                        <span className="barra"></span>
                        <p>A Clínica Estética Sensibilité, inaugurada em outubro de 2010 em Recife, Pernambuco, chegou para proporcionar o que há de mais moderno e eficiente em tratamento estético, sempre com novidades, em benefício de sua auto-estima e bem estar; com os prossionais mais qualicados, fisioterapeutas e nutricionista para proporcionar à você um melhor resultado e uma estadia agradável no nosso ambiente de trabalho.</p>
                        <Link to='/contato' className="btn3">Contato</Link>
                    </div>
                </div>
            </div>
    )
}
export default TelaInicio;