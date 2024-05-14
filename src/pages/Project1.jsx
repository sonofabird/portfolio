import ProjectTemplate from "../components/ProjectTemplate";
import { project1, project2 } from "../assets/ProjectTextAssets";
import project1_img from "../assets/project1_img.png"

const Project1 = () => {
    return(
        <ProjectTemplate project={project1} img={project1_img}/>
    )
}

export default Project1;