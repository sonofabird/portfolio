import { Box, Typography } from '@mui/material'
import Icon from "../assets/home/header_illust.png"

const Header = () => {

    return(
        
        <Box display="flex" >
            <Box textAlign='left'>
                <Typography variant='h1' width={576} height={303}>kenzie hisako dalton</Typography>
                <Typography>product designer + illustrator + programmer</Typography>
            </Box>
            <img src={Icon} width="45%"></img>
        </Box>
       
    )

}

export default Header