import { Box, Grid, Typography } from "@mui/material";
import header_illust from '../assets/header_illust.png'

const Home = () => {

    return(
        <Box sx={{ width: "100%" }} display="flex" justifyContent="space-between">
            <Box sx={{ width: "50%" }} display="flex" flexDirection="column" justifyContent="center" textAlign="left" paddingLeft="100px">
                <Typography variant="h1">kenzie hisako dalton</Typography>
                <Typography variant="body1">designer/illustrator/programmer</Typography>
            </Box>
            <Box display="flex" sx={{position: "absolute", bottom: 0, right: "100px" }}>
                <img src={header_illust} alt="its a me" height="600px"/>
            </Box>
        </Box>
    )
}

export default Home; 