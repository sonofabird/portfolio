import { Box, Button, Typography } from "@mui/material";
import header_illust from '../assets/header_illust.png'

const Home = () => {
    
    
    return(
        <Box display="flex" alignContent="center" sx={{width:"100%"}}> 
            <Box textAlign="left" sx={{width:"300px"}} display="flex" flexDirection="column">
                <Typography variant="h1">
                    kenzie hisako dalton 
                </Typography> 
                <Typography variant="body1">
                    designer/illustrator/programmer
                </Typography>
            </Box>
            <img src={header_illust} alt="its a me" height="600px"/>
        </Box>
    )
}

export default Home; 