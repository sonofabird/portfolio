import { Box, Typography } from "@mui/material";
import Icon from "../assets/home/header_illust.png";
import { Element } from "react-scroll";
import Name from "../assets/home/NAME.png";

const Header = () => {
  return (
    <Element name="/">
      <Box display="flex" paddingX="10%">
        <Box textAlign="left" paddingTop="10%">
          <Typography lineHeight={1} variant="title">
            kenzie hisako dalton
          </Typography>
          <Typography fontSize={24}>
            product designer + illustrator + programmer
          </Typography>
        </Box>

        <img src={Icon} width="45%"></img>
      </Box>
    </Element>
  );
};

export default Header;
