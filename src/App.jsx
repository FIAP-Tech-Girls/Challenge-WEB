import {} from 'react'
import Nav from '../src/Nav'
import Home from '../src/Home'
import Techgirls from './Techgirls'
import {Outlet} from 'react-router-dom'


function App() {
  

  return (
    <>
      <Nav />
      <Home/>
      <Outlet/>
      <Techgirls/>
    </>
  )
}

export default App
