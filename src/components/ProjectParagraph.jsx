import { Box, Typography } from '@mui/material'
import Icon from "../assets/home/header_illust.png"

const ProjectParagraph = (props) => {

    return(
        
        <Box textAlign='left'>
           <Typography variant='body1'>{props.subtitle}</Typography> 
           <Typography variant='h4'>{props.title}</Typography> 

           {props.body.map((bodypart,index)=>(
                <Typography variant='body1' key={index}>{bodypart}
                </Typography> 
           ))}
           
        </Box>
       
    )

}

export default ProjectParagraph