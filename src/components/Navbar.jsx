import { AppBar, Box, Typography, Toolbar, Menu, MenuItem, Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const sections = ["Overview", "Background", "Discovery", "Design", "Outcomes"];

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
                    <Box display="flex" flexDirection="row" sx={{ width: "100%" }} justifyContent="space-between">
                        <Typography color="black">MHD</Typography>
                        <Box sx={{ width: "30%" }} display="flex" flexDirection="row" justifyContent="space-between">
                            <Link to="/" smooth duration={500}>
                                <Typography color="black">Home</Typography>
                            </Link>
                            <Typography color="black" onClick={handleOpenUserMenu} component="span" >Project1</Typography>
                            <Typography color="black">About</Typography>
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
                                    <Typography color="black">
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