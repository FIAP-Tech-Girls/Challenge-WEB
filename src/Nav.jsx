import {} from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <>
    <div className='container'>
    <div className='NavBarLogin'>
      <NavLink to='Login' className='Item-NavL' id='Item-NavL'>Login</NavLink>
      <NavLink to='Cadastro' className='Item-NavL' id='Item-NavL'>Cadastro</NavLink>
    </div>

    <div className='NavBar'>
      <img className='NavBar-logo' src="./src/assets/LogoTechGirlsLightMode.png" alt="" />
      <nav className='NavBar-item'>
        <NavLink to='Home' className='Item-Nav' id='Item-Nav'>Home</NavLink>
        <NavLink to='TechGirls'className='Item-Nav' id='Item-Nav'>Tech Girls</NavLink>
        <NavLink to='Projetos' className='Item-Nav' id='Item-Nav'>Projetos</NavLink>
        <NavLink to='Tiana' className='Item-Nav' id='Item-Nav'>Tiana</NavLink>
        <NavLink to='Duvidas Frequentes' className='Item-Nav' id='Item-Nav'>Dúvidas Frequentes</NavLink>
      </nav>
      
    </div>
    
    
   </div>   
    </>
  )
}

export default Nav