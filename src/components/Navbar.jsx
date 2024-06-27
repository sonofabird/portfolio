import { AppBar, Box, Typography, Toolbar, Menu, MenuItem, Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import LinkedInIcon from "../assets/home/linkedin_icon.png"

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const sections = ["overview", "background", "discovery", "design", "outcomes"];

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  
    return(
        <AppBar position="static" sx={{ bgcolor: "transparent" }} elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box paddingX="5%" paddingBottom="5%" paddingTop="5%" display="flex" flexDirection="row" sx={{ width: "100%" }} justifyContent="space-between">
                        <Typography variant="navbar" color="black">KHD</Typography>
                        <Box width="50%" display="flex" flexDirection="row" justifyContent="space-between">
                            <Link to="/" smooth duration={500}>
                                <Typography variant="navbar" color="black">home</Typography>
                            </Link>
                            <Typography variant="navbar" color="black" onClick={handleOpenUserMenu} component="span" >project</Typography>
                            <a  target="_blank" href="https://www.linkedin.com/in/mhdalton/">
                                <img  src={LinkedInIcon} width="8%"></img>
                            </a>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        {sections.map((section) => (
                            <MenuItem key={section} onClick={handleCloseUserMenu}>
                                <Link to={'/'} smooth duration={500}>
                                    <Typography variant="navbar" color="black">
                                        {section}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;