import { Box, Typography } from "@mui/material";
import Icon from "../assets/home/header_illust.png";
import Image from "./Image.jsx";

const ProjectParagraph = (props) => {
  return (
    <Box textAlign="left" paddingTop="5%">
      <Typography variant="h4">{props.subtitle}</Typography>
      <Typography variant="h2">{props.title}</Typography>

      {props.body.map((bodypart, index) => (
        <Typography variant="b1" key={index}>
          {bodypart}
        </Typography>
      ))}

    </Box>
  );
};

export default ProjectParagraph;
