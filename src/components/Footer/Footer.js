import React from "react";
import './FooterEstilo.css'

import {FaFacebook,FaLinkedin, FaMailBulk, FaPhone, FaInstagram, FaSearchLocation, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="rodape">
            <div className="rodape-container">
                <div className="esquerda">
                    <div className="icones">
                        <FaSearchLocation size={20} style={{color: '#fff'}}/>
                    </div>
                    <div>
                        <p>Boa Viagem  N°1594</p>
                        <p>Cnpj: 02.264.148/0001-76</p>
                        <h4 className="recife" style={{color: '#fff'}}>Av.Boa Viagem - Recife</h4>
                    </div>
                    <div className="icones">
                        <FaPhone size={20} style={{color: '#fff'}}/>
                        <h4 style={{color: '#fff'}}>97721518</h4>
                    </div>
                    <div className="icones">
                        <FaMailBulk size={20} style={{color: '#fff'}}/>
                        <h4>esteticistape@hotmail.com</h4>
                    </div>
                    <div className="icones">
                        <FaInstagram size={20} style={{color: '#fff'}}/>
                        <h4>EsteticaRecife</h4>
                    </div>
                </div>
                <div className="direita">
                <h4 className="companhia">Sobre a companhia</h4>
                <p> Olá, nossa equipe é formada por profissionais qualificados e trabalhando
                    em harmonia para o melhor serviço ao cliente, em busca do melhor
                    atendimento, lealdade as expectativas e em foco de não ser apenas uma 
                    empresa e sim uma parceria.</p>
                    <div className="rede-social">
                        <a href="https://www.facebook.com/profile.php?id=100019277379259" target='_blank'>
                        <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} />
                        </a>
                        
                        <a href="https://www.instagram.com/mayconlundgren/" target='_blank'>
                        <FaInstagram size={30} style={{color: '#fff', marginRight: '1rem'}} />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/maycon-douglas-8bb1a61a2/" target='_blank'>
                        <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
                        </a>
                        
                        <a href="https://web.whatsapp.com/send?phone=5581997721518" target='_blank'>
                        <FaWhatsapp size={30} style={{color: '#fff', marginRight: '1rem'}} />
                        </a>
                   </div>
                   
            </div>
            <div className="float">
            <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5581997721518&text=Eu%20gostaria%20de%20conhecer%20o%20seu%20trabalho.'><FaWhatsapp size={50} style={{color: '#fff'}}/></a>
            </div>
            </div>
        </div>
    )
}

export default Footer;