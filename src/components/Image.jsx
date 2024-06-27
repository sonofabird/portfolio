import { Box, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";

const Image = (props) => {
  return (
    <Box>
      {screen.width > 400 ? (
        <Box textAlign="left" display="absolute" paddingX="10%" paddingY="5%">
          <img src={props.imageSRC} width="100%" />
          <Box paddingX="5%">
            <Typography variant="caption">{props.caption}</Typography>
          </Box>
        </Box>
      ) : (
        <Box textAlign="left" display="absolute" paddingX="10%" paddingY="5%">
          <img src={props.imageSRC} width="100%" />
          <Box paddingX="5%">
            <Typography fontSize="50%" variant="caption">{props.caption}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Image;
