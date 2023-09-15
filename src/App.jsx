import {} from 'react'
import Nav from '../src/Nav'
import Home from '../src/Home'
import Techgirls from './Techgirls'
import Projetos from './Projetos'
import Tiana from './Tiana'
import Duvidas from './Duvidas'
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
      <Route path='/Tech Girls' element={<Techgirls />} />
      <Route path='/Projetos' element={<Projetos />} />
      <Route path='/Tiana' element={<Tiana />} />
      <Route path='/Duvidas Frequentes' element={<Duvidas />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}


export default App

 
