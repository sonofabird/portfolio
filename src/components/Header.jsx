import { Box, Typography } from "@mui/material";
import Icon from "../assets/home/header_illust.png";
import { Element } from "react-scroll";
import Name from "../assets/home/NAME.png";

const Header = () => {
  return (
    <Element name="/">
      {screen.width > 400 ? (
        <Box display="flex" paddingX="10%" paddingTop="5%">
          <Box textAlign="left" paddingTop="10%" width="100%">
            <img src={Name} />
            <Box paddingX="4%" paddingY="4%">
              <Typography fontSize={24}>
                product designer + illustrator + programmer
              </Typography>
            </Box>
          </Box>

          <img src={Icon} width="45%"></img>
        </Box>
      ) : (
        <Box display="flex" paddingX="10%" paddingTop="5%">
          <Box textAlign="left" paddingTop="10%" width="100%">
            <img src={Name} width="85%" />
            <Box paddingY="4%">
              <Typography fontSize="8px">
                product designer + illustrator + programmer
              </Typography>
            </Box>
          </Box>

          <img src={Icon} width="45%"></img>
        </Box>
      )}
    </Element>
  );
};

export default Header;
