import {Box, Card, Typography } from "@mui/material";
import grid_tape from '../assets/grid_tape.png'


const Tape = (props) => {

    return(
        <Box>
            <img height={75} src={props.tape}/>
        </Box>
    )
}

const NiceToMeetYou = () => {

    return(
        <>

            <Tape isTop={true} tape={grid_tape}/>
            <Card 
                position="absolute"
                
                sx={{
                    bgcolor: '#000000'
                }}        
            >
                <Box paddingY={8} paddingX={12}>
                    <Typography paddingBottom={4} variant='h3' align ='left' color='#ffffff'>nice to meet you!</Typography>
                    <Typography align='left' color='#ffffff'>I am a product designer with a background in illustration and computer science! I love combining creativity and technicality to make robust designs.</Typography>
                </Box>
            </Card>
            <Tape isTop={false} tape={grid_tape}/>
        </>
    )

}

export default NiceToMeetYou;