import Bio from './components/Bio'
import Header from './components/Header'
import './App.css'
import TileGrid from './components/TileGrid'
import Proj1Desc from './assets/p1/Proj1Desc'
import TileList from './components/TileList'
import Proj1Features from './assets/p1/Proj1Features'

import ProjectParagraph from './components/ProjectParagraph'
import Text from './assets/p1/Text'
//import projectBackgroundImage from './assets/p1/ImageIndex'
//import { projectBackgroundImage } from './assets/p1'
import Navbar from './components/Navbar'
import { Element } from "react-scroll"


function App() {

  const projectBackground = Text.projectBackground
  const discovery = Text.discovery
  const design = Text.design
  const outcomes = Text.outcomes

  return (
    <>

     //<TileGrid description={Proj1Desc}/>
     //<TileList description={Proj1Features.description} features={Proj1Features.features}/>

      <Navbar/>
      <Header/>
      <Bio/>
      {
        projectBackground.map((paragraph,index)=>(
          <ProjectParagraph 
            title={paragraph.title} 
            subtitle={paragraph.subtitle} 
            body={paragraph.body}
            key={index}
          />
        ))
      }


      
      {
         discovery.map((paragraph,index)=>(
          <ProjectParagraph 
            title={paragraph.title} 
            subtitle={paragraph.subtitle} 
            body={paragraph.body}
            key={index}
          />
        ))
      }

      {
         design.map((paragraph,index)=>(
          <ProjectParagraph 
            title={paragraph.title} 
            subtitle={paragraph.subtitle} 
            body={paragraph.body}
            key={index}
          />
        ))
      }
      {
        outcomes.map((paragraph,index)=>(
          <ProjectParagraph 
            title={paragraph.title} 
            subtitle={paragraph.subtitle} 
            body={paragraph.body}
            key={index}
          />
        ))
      }
    </>
  )
}

export default App
