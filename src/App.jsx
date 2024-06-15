import Bio from './components/Bio'
import Header from './components/Header'
import './App.css'
import TileGrid from './components/TileGrid'
import Proj1Desc from './assets/p1/Proj1Desc'

function App() {

  return (
    <>
     <Header/>
     <Bio/>
     <TileGrid description={Proj1Desc}/>
    </>
  )
}

export default App
