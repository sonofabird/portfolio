import { Box, Typography } from '@mui/material'


const Bio = () => {

    return(
        
        <Box textAlign='left' bgcolor='#000000' paddingX='142px' paddingY='212px' borderRadius='35px'>
            <Typography variant='h3' paddingBottom="4px" color='#FFFFFF'>nice to meet you!</Typography>
            <Typography color='#FFFFFF'>I am a <b><i>product designer</i></b> with a background in <b><i>illustration</i></b> and <b><i>computer science</i></b>! I love combining creativity and technicality to make robust designs.</Typography>
        </Box>
       
    )

}

export default Bio