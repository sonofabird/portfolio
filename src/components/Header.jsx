import { Box, Typography } from "@mui/material";
import Icon from "../assets/home/header_illust.png";
import { Element } from "react-scroll";
import Name from "../assets/home/NAME.png";

const Header = () => {
  return (
    <Element name="/">
      <Box display="flex" paddingX="10%" paddingTop="5%">
        <Box textAlign="left" paddingTop="12%" width="100%">
          <img src={Name}></img>
          <Box paddingY="5%" paddingX="5%">
            <Typography fontSize={24}>
              product designer + illustrator + programmer
            </Typography>
          </Box>
        </Box>

        <img src={Icon} width="45%"></img>
      </Box>
    </Element>
  );
};

export default Header;
