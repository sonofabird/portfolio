import { Box, Typography } from "@mui/material";
import project_head from "../assets/p1/project_head.png";
import preview from "../assets/p1/preview.png";
import { Element } from "react-scroll";

const ProjectHeader = () => {
  console.log(window.innerWidth);

  return (
    <Element name="/overview">
      <Box paddingY="10%">
        <Box width="100%" paddingX="5%" display="flex" justifyContent="center">
          <img src={project_head} width="100%" />
        </Box>
        <Box display="flex" flexDirection="horizontal" width="100%">
          <Box paddingY="5%" paddingX="5%">
            <Typography variant="bullets" textAlign={"left"} width={500}>
              Mentra AI is a platform in which starting entrepreneurs can
              receive guidance while building a business plan in a low-pressure
              environment. The platform is centred around the Mentra AI chatbot,
              which gives users advice, suggestions, resources and connections
              relevant to their business plan.
            </Typography>
          </Box>
          <Box marginTop={-10} width="100%">
            <img src={preview} />
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default ProjectHeader;
