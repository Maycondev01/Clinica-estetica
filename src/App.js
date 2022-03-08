import './App.css';
import {Routes, Route} from 'react-router-dom'
import Inicio from './routes/Inicio';
import Sobre from './routes/Sobre'
import Contato from './routes/Contato';
import Servicos from './routes/Servicos'
import Cabelos from './routes/Cabelos';
import Sobrancelha from './routes/Sobrancelha';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio/>}  />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/contato' element={<Contato/>} />
      <Route path='/servico' element={<Servicos/>} />
      <Route path='/cabelo' element={<Cabelos/>} />
      <Route path='/sobrancelha' element={<Sobrancelha/>}/>
    </Routes>
    </>
  );
}

export default App;
