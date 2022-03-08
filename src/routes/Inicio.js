import React from 'react'
import Nav from '../components/Nav/Nav'
import TelaInicio from '../components/TelaInicio/TelaInicio'
import Video from '../components/Sobre/Video'
import Produtos from '../components/Produtos/Produtos'
import Cabelo from '../components/Produtos/Cabelo'
import Mapa from '../components/Mapa/Mapa'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const Inicio = () => {
  return (
    <div>
        <Nav/>
        <TelaInicio/>
        <Video/>
        <Produtos/>
        <Cabelo/>
        <Mapa/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Inicio