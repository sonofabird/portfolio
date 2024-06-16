import Bio from './components/Bio'
import Header from './components/Header'
import './App.css'
import Navbar from './components/Navbar'
import { Element } from "react-scroll"

function App() {

  return (
    <>
      <Navbar/>
      <Element name="/">
        <Header/>
        <Bio/>
      </Element>
    </>
  )
}

export default App
