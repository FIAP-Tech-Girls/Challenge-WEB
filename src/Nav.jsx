import {} from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className='NavBar'>
      <NavLink to='Home' id='Item-Nav'>Home</NavLink>
      <NavLink to='Tech Girls' id='Item-Nav'>Tech Girls</NavLink>
      <NavLink to='Projetos' id='Item-Nav'>Projetos</NavLink>
      <NavLink to='Tiana' id='Item-Nav'>Tiana</NavLink>
      <NavLink to='Duvidas Frequentes' id='Item-Nav'>Dúvidas Frequentes</NavLink>
    </div>
    
    
      
    </>
  )
}

export default Nav