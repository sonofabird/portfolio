import { AppBar, Box, Typography, Toolbar, Menu, MenuItem, Container } from "@mui/material";
import { useState } from "react";

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
                        <Typography>MHD</Typography>
                        <Box sx={{ width: "30%" }} display="flex" flexDirection="row" justifyContent="space-between">
                            <Typography>Home</Typography>
                            <Typography onClick={handleOpenUserMenu} component="span" >Project1</Typography>
                            <Typography>About</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        {sections.map((section) => (
                            <MenuItem key={section} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{section}</Typography>
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