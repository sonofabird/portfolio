import { Box, Typography } from "@mui/material";
import grid_tape from "../assets/home/grid_tape 1.png";
import pink_tape from "../assets/home/pink_tape.png";

const Bio = () => {
  return (
    <Box paddingBottom="30%" paddingX="5%">
      <Box position="absolute" marginTop={-8} paddingLeft="10%">
        <img src={grid_tape} width="100%"></img>
      </Box>

      <Box
        position="absolute"
        marginTop={-10}
        paddingLeft="3%"
        sx={{ opacity: "70%" }}
      >
        <img src={pink_tape} width="50%"></img>
      </Box>

      <Box
        textAlign="left"
        bgcolor="#000000"
        paddingX="142px"
        paddingY="212px"
        borderRadius="35px"
        sx={{ boxShadow: 4 }}
      >
        <Typography variant="h3" paddingBottom="5%" color="#FFFFFF">
          nice to meet you!
        </Typography>
        <Typography fontSize="32px" color="#FFFFFF">
          I am a{" "}
          <b>
            <i>product designer</i>
          </b>{" "}
          with a background in{" "}
          <b>
            <i>illustration</i>
          </b>{" "}
          and{" "}
          <b>
            <i>computer science</i>
          </b>
          ! I love combining creativity and technicality to make robust designs.
        </Typography>
      </Box>
      <Box position="absolute" marginTop={-10} paddingLeft="50%">
        <img src={grid_tape} width="100%"></img>
      </Box>
    </Box>
  );
};

export default Bio;
