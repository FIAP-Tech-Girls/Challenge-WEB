import {} from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <>
    <div className='container'>
    <div className='NavBarLogin'>
      <NavLink to='Login' id='Item-NavL'>Login</NavLink>
      <NavLink to='Cadastro' id='Item-NavL'>Cadastro</NavLink>
    </div>

    <div className='NavBar'>
      <img className='NavBar-logo' src="./src/assets/LogoTechGirlsLightMode.png" alt="" />
      <nav className='NavBar-item'>
        <NavLink to='Home' id='Item-Nav'>Home</NavLink>
        <NavLink to='TechGirls' id='Item-Nav'>Tech Girls</NavLink>
        <NavLink to='Projetos' id='Item-Nav'>Projetos</NavLink>
        <NavLink to='Tiana' id='Item-Nav'>Tiana</NavLink>
        <NavLink to='Duvidas Frequentes' id='Item-Nav'>Dúvidas Frequentes</NavLink>
      </nav>
      
    </div>
    
    
   </div>   
    </>
  )
}

export default Nav