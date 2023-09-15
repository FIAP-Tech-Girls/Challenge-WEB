import {} from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <NavLink to='Home'>Home</NavLink>
    <NavLink to='Tech Girls'>Tech Girls</NavLink>
    <NavLink to='Projetos'>Projetos</NavLink>
    <NavLink to='Tiana'>Tiana</NavLink>
    <NavLink to='Duvidas Frequentes'>Dúvidas Frequentes</NavLink>
    
      
    </>
  )
}

export default Nav