import Bio from './components/Bio'
import Header from './components/Header'
import './App.css'
import ProjectParagraph from './components/ProjectParagraph'
import Text from './assets/p1/Text'
// import projectBackgroundImage from './assets/p1/ImageIndex'
//import { projectBackgroundImage } from './assets/p1'

function App() {

  const projectBackground = Text.projectBackground
  const discovery = Text.discovery
  const design = Text.design
  const outcomes = Text.outcomes

  return (
    <>
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
