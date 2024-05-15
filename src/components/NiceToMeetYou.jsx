import {Box, Card, Typography } from "@mui/material";
import grid_tape2 from '../assets/grid_tape2.png'


const Tape = (props) => {

    return(
        <Box
            position="relative"
            component="img"
            top={ props.isTop ? 40 : -40}
            sx={{
                height: 75,
                opacity: 0.85,
            }}
            src={props.tape}
            alt="tape"
        />
    )
}

const NiceToMeetYou = () => {

    return(
        <Box position="relative" sx={{ width: "100%" }} justifyContent="center" top={-100}>
            <Tape isTop={true} tape={grid_tape2}/>
            <Card sx={{ bgcolor: '#000000', borderRadius: 8 }} >
                <Box paddingY={16} paddingX={12}>
                    <Typography paddingBottom={4} variant='h3' align ='left' color='#ffffff'>nice to meet you!</Typography>
                    <Typography align='left' color='#ffffff'>I am a product designer with a background in illustration and computer science! I love combining creativity and technicality to make robust designs.</Typography>
                </Box>
            </Card>
            <Tape isTop={false} tape={grid_tape2}/>
        </Box>
    )

}

export default NiceToMeetYou;