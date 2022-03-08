import React from 'react'
import './VideoEst.css'
import estetic from '../../assets/estetic.mp4'

const Video = () => {
    return(
        <div className='pai'>
            <video controls muted id='video' width={800} height={1000}  >
                <source src={estetic} type='video/mp4' />
            </video>
            <div className='content'>
                <h1 style={{color: '#fff'}}>Sobre nosso trabalho</h1>
                <p style={{color: '#fff'}}>Nossos serviços são baseados na expectativa dos clientes, conheça um pouco melhor sobre os nossos serviços no vídeo abaixo</p>
            </div>
        </div>
    )
}

export default Video;