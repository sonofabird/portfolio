import Bio from './components/Bio'
import Header from './components/Header'
import './App.css'
import TileGrid from './components/TileGrid'
import Proj1Desc from './assets/p1/Proj1Desc'
import TileList from './components/TileList'
import Proj1Features from './assets/p1/Proj1Features'

function App() {

  return (
    <>
     <Header/>
     <Bio/>
     <TileGrid description={Proj1Desc}/>
     <TileList description={Proj1Features.description} features={Proj1Features.features}/>
    </>
  )
}

export default App
