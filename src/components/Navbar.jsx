import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Container,
  IconButton,
  Icon,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import LinkedInIcon from "../assets/home/linkedin_icon.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const sections = [
    { name: "overview", to: "/overview" },
    { name: "background", to: "/projectBackground" },
    { name: "discovery", to: "/discovery" },
    { name: "design", to: "/design" },
    { name: "outcomes", to: "/outcomes" },
  ];

  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };

  const gotoLinkedIn = () => {
    window.open("https://www.linkedin.com/in/mhdalton/", "_blank");
  };

  const handleCloseUserMenu = () => {
    console.log("close");
    setAnchorElUser(null);
  };

  useEffect(() => {
    console.log(anchorElUser);
  }, [anchorElUser]);

  return (
    <Box>
      {screen.width > 400 ? (
        <AppBar position="sticky" sx={{ bgcolor: "#FFFAF8" }} elevation={0}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                paddingX="5%"
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="navbar" color="black">
                  KHD
                </Typography>
                <Box
                  width="50%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link to="/" smooth duration={500}>
                    <Typography variant="navbar" color="black">
                      home
                    </Typography>
                  </Link>
                  <Link>
                    <Typography
                      variant="navbar"
                      color="black"
                      onClick={handleOpenUserMenu}
                      component="span"
                    >
                      project
                    </Typography>
                  </Link>
                  <IconButton onClick={gotoLinkedIn}>
                    <Icon>
                      <img src={LinkedInIcon} width="100%" />
                    </Icon>
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {sections.map((section, index) => (
                    <MenuItem key={index}>
                      <Link
                        to={section.to}
                        smooth
                        duration={500}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography variant="navbar" color="black">
                          {section.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar position="sticky" sx={{ bgcolor: "#FFFAF8" }} elevation={0}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                paddingX="5%"
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="navbar" color="black">
                  KHD
                </Typography>
                <Box
                  width="50%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link to="/" smooth duration={500}>
                    <Typography fontSize={12} variant="navbar" color="black">
                      home
                    </Typography>
                  </Link>
                  <Link>
                    <Typography
                      fontSize={12}
                      variant="navbar"
                      color="black"
                      onClick={handleOpenUserMenu}
                      component="span"
                    >
                      project
                    </Typography>
                  </Link>
                  <IconButton onClick={gotoLinkedIn}>
                    <Icon>
                      <img src={LinkedInIcon} width="80%" />
                    </Icon>
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {sections.map((section, index) => (
                    <MenuItem key={index}>
                      <Link
                        to={section.to}
                        smooth
                        duration={500}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography variant="navbar" color="black">
                          {section.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </Box>
  );
};

export default Navbar;
