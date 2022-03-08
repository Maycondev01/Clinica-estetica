import React, {useState} from 'react'
import './NavEst.css'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

const Nav = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    
    const handleClick = () => setClick(!click)
    const fechaMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

  return (
    <nav className='navbar'>
        <Link to='/' className='logo'>
            Estetic <i className='fab fa-firstdraft'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={click ? 'menu active' : 'menu'}>
            <li className='nav-list'>
                <Link to='/' className='nav-link' onClick={fechaMenu} >Inicio</Link>
            </li>
            <li className='nav-list'>
                <Link to='/sobre' className='nav-link' onClick={fechaMenu}>Sobre</Link>
            </li>
            <li className='nav-list'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                <Link to='/servico'
                 className='nav-link'
                 onClick={fechaMenu}   
                >Serviços <i className='fas fa-caret-down'/>
                </Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-list'>
                <Link to='/contato' className='nav-link' onClick={fechaMenu} >Contato</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default Nav