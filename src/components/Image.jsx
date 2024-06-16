import { Box, Typography } from '@mui/material'


const Image = (props) => {
    console.log(props)
    return(
        
        <Box textAlign='left'>
            <img src={props.imageSRC} />
            <Typography variant = 'body1'>{props.captione}</Typography>    
        </Box>
       
    )

}

export default Image