import {Box, Card, Typography } from "@mui/material";



const NiceToMeetYou = () => {

    return(
       
        <Card 
            position="absolute"
            
            sx={{
                bgcolor: '#000000',
                marginTop: -4
            }}        
        >
            <Box paddingY={8} paddingX={12}>
                <Typography paddingBottom={4} variant='h3' align ='left' color='#ffffff'>nice to meet you!</Typography>
                <Typography align='left' color='#ffffff'>I am a product designer with a background in illustration and computer science! I love combining creativity and technicality to make robust designs.</Typography>
            </Box>
        </Card>
      
    )

}

export default NiceToMeetYou;