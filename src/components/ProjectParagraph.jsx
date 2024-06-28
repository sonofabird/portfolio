import { Box, Typography } from "@mui/material";
import Icon from "../assets/home/header_illust.png";
import Image from "./Image.jsx";

const ProjectParagraph = (props) => {
  return (
    <Box>
      {screen.width > 400 ? (
        <Box textAlign="left" paddingTop="5%">
          <Typography variant="h4">{props.subtitle}</Typography>
          <Typography variant="h2">{props.title}</Typography>

          {props.body.map((bodypart, index) => (
            <Typography variant="b1" key={index}>
              {bodypart}
            </Typography>
          ))}
        </Box>
      ) : (
        <Box textAlign="left" paddingY="15%">
          <Typography fontSize="60%" variant="h4">{props.subtitle}</Typography>
          <Typography fontSize="100%" variant="h2" fontWeight={550}>{props.title}</Typography>

          {props.body.map((bodypart, index) => (
            <Typography  fontSize="16px" variant="b1" key={index}>
              {bodypart}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProjectParagraph;
