import {} from 'react'
import Nav from '../src/Nav'
import Home from '../src/Home'
import Techgirls from './Techgirls'
import Projetos from './Projetos'
import Tiana from './Tiana'
import Duvidas from './Duvidas'
import Login from './Login'
import Cadastro from './Cadastro'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

 

 

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/TechGirls' element={<Techgirls />} />
      <Route path='/Projetos' element={<Projetos />} />
      <Route path='/Tiana' element={<Tiana />} />
      <Route path='/Duvidas Frequentes' element={<Duvidas />} />
      <Route path='/Login' element={<Login />}/>
      <Route path='/Cadastro' element={<Cadastro />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}


export default App

 
