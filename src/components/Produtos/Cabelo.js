import React, {useEffect, useState, useRef} from 'react'
import './CabeloEst.css'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

const Produtos = () => {
    const [data,setData] = useState([]);
    const carrosel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/cabelo.json')
        .then((response) => response.json())
        .then(setData);
    }, []);

    const clickLeft = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
    }
    const clickRight = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
    }

    if(!data || !data.length) return null


    return(
        <div className='container'>
            
            <div className='carrosel-cabelo' ref={carrosel}>
                {data.map((item) => {
                    const {id,nome,preco,desc,image} = item;

                    return ( 
                    <div className='item' key={id}> 
                        <div className='image'> 
                            <img src={image} alt={nome}/>
                        </div>
                        <div className='info'> 
                            <span className='nome'>{nome}</span>
                            <span className='preco'> R${preco}</span>
                            <span className='desc'>{desc}</span>
                        </div>
                    </div>)
                })}
            </div>
            <div className='botoes-c'>
                <h1>Cabelos</h1>
            <button onClick={clickLeft}><FaArrowAltCircleLeft style={{marginRight: '2rem'}} alt="moverleft"/></button>
            <button onClick={clickRight}><FaArrowAltCircleRight style={{marginLeft: '2rem'}} alt="moverright"/></button>
            </div>
        </div>
    )
}
export default Produtos;