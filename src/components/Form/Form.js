import React, {useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import './FormEstilo.css'

const Form = () => {
const valorinicial = { nome: "", email: "", numero: "", mensagem: "" }
    const [valores,setValores] = useState(valorinicial)
    const [erros, setErros] = useState({});
    const [enviar, setEnviar] = useState(false);

    const handleChange = (e) => {
        const { name, value} = e.target
        setValores({...valores, [name]:value});
        console.log(valores)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qcryff9','template_2av5ngk', e.target,"user_GEubyLZvnngtTkM9x08qt"
        )
        
        .then(res => {
            console.log(res)
        }).catch(err => console.log(err));
        setErros(validar(valores))
        setEnviar(true);
    }

    useEffect(() => {
        console.log(erros)
        if(Object.keys(erros).length === 0 && enviar) {
            console.log(valores)
        }
    },[erros])

    const validar = (valores) => {
        const erro = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!valores.nome) {
            erro.nome = "Preencher nome do usúario";
        } else if(valores.nome.length < 4) {
            erro.nome = "Preencha seu nome completo"
        } 
        if (!valores.email) {
            erro.email = "Preencha seu email!";
        } else if(!regex.test(valores.email)) {
            erro.email = "Este email não é válido."
        } 
        if (!valores.numero) {
            erro.numero = "Preencha seu número!";
        } else if(valores.numero.length < 7) {
            erro.numero = "Verifique se seu número está correto."
        }
        if (!valores.mensagem) {
            erro.mensagem = "Preencher a mensagem"
        }
        return erro;
    }


    return(
        <div className='container' id='contato'>
            {Object.keys(erros).length === 0 && enviar ? (<div className="mensagem-sucesso" >Formulário enviado com sucesso</div>) : (
                <pre> {JSON.stringify(valores, undefined, 2)}</pre>
            )}
            <form className='form' onSubmit={handleSubmit}>
                <h1>Preencher Formulário</h1>
                <p>{erros.nome}</p>
                <label>Nome</label>
                <input type='text' 
                name='nome' 
                placeholder='Seu nome' 
                value={ valores.nome}
                onChange={handleChange}/>
                <p>{erros.email}</p>
                <label>Email</label>
                <input  type='email' 
                name='email' 
                placeholder='Seu E-mail' 
                value={valores.email}
                onChange={handleChange}/>
                <p>{erros.numero}</p>
                <label>Número</label>
                <input type='text' 
                name='numero' 
                placeholder='Seu número' 
                value={valores.numero}
                onChange={handleChange}/>
                <p>{erros.mensagem}</p>
                <label>Mensagem</label>
                <textarea rows='5' 
                placeholder='Escreva sua mensagem' 
                name='mensagem' 
                value={valores.mensagem}
                onChange={handleChange}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}



export default Form