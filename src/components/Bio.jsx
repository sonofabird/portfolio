import { Box, Typography } from "@mui/material";
import grid_tape from "../assets/home/grid_tape 1.png";
import pink_tape from "../assets/home/pink_tape.png";

const Bio = () => {
  return (
    <Box paddingBottom="10%" paddingX="5%">
      {screen.width > 400 ? (
        <Box>
          <Box
            position="absolute"
            marginTop={-8}
            paddingLeft="10%"
            maxWidth="60%"
          >
            <img src={grid_tape} width="100%" />
          </Box>

          <Box
            position="absolute"
            marginTop={-10}
            paddingLeft="3%"
            sx={{ opacity: "70%" }}
          >
            <img src={pink_tape} width="50%" />
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
            <Typography fontSize="24px" color="#FFFFFF">
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
              ! I love combining creativity and technicality to make robust
              designs.
            </Typography>
          </Box>

          <Box position="absolute" marginTop={-8} paddingLeft="50%">
            <img src={grid_tape} width="100%" />
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            position="absolute"
            marginTop={-2}
            paddingLeft="10%"
            maxWidth="50%"
          >
            <img src={grid_tape} width="100%" />
          </Box>

          <Box
            position="absolute"
            marginTop={-3}
            paddingLeft="3%"
            sx={{ opacity: "70%" }}
          >
            <img src={pink_tape} width="45%" />
          </Box>

          <Box
            textAlign="left"
            bgcolor="#000000"
            paddingX="15%"
            paddingY="15%"
            borderRadius="35px"
            sx={{ boxShadow: 4 }}
          >
            <Typography fontSize="100%" variant="h3" paddingBottom="5%" color="#FFFFFF">
              nice to meet you!
            </Typography>
            <Typography fontSize="50%" color="#FFFFFF">
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
              ! I love combining creativity and technicality to make robust
              designs.
            </Typography>
          </Box>

          <Box position="absolute" marginTop={-3} paddingLeft="50%">
            <img src={grid_tape} width="100%" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Bio;
