import { Box, Typography } from "@mui/material";
import project_head from "../assets/p1/project_head.png";
import preview from "../assets/p1/preview.png";
import { Element } from "react-scroll";

const ProjectHeader = () => {
  console.log(window.innerWidth);

  return (
    <Element name="/overview">
      {screen.width > 400 ? (
        <Box paddingY="10%">
          <Box
            width="100%"
            paddingX="5%"
            display="flex"
            justifyContent="center"
          >
            <img src={project_head} width="100%" />
          </Box>
          <Box
            display="flex"
            flexDirection="horizontal"
            width="100%"
            justifyContent="space-between"
          >
            <Box paddingY="5%" paddingLeft="8%" minWidth="50%">
              <Typography variant="bullets" textAlign={"left"}>
                Mentra AI is a platform in which starting entrepreneurs can
                receive guidance while building a business plan in a
                low-pressure environment. The platform is centred around the
                Mentra AI chatbot, which gives users advice, suggestions,
                resources and connections relevant to their business plan.
              </Typography>
            </Box>
            <img
              src={preview}
              height="100%"
              style={{
                transform: "translate(0%, -10%)",
              }}
            />
          </Box>
        </Box>
      ) : (
        <Box paddingY="10%">
          <Box
            width="100%"
            paddingX="5%"
            display="flex"
            justifyContent="center"
          >
            <img src={project_head} width="100%" />
          </Box>
          <Box
            display="flex"
            flexDirection="horizontal"
            width="100%"
            justifyContent="space-between"
          >
            <Box paddingY="5%" paddingLeft="8%" minWidth="50%">
              <Typography variant="bullets" textAlign={"left"} fontSize="50%" >
                Mentra AI is a platform in which starting entrepreneurs can
                receive guidance while building a business plan in a
                low-pressure environment. The platform is centred around the
                Mentra AI chatbot, which gives users advice, suggestions,
                resources and connections relevant to their business plan.
              </Typography>
            </Box>
            <img
              src={preview}
              width="100%"
              style={{
                transform: "translate(0%, -10%)",
              }}
            />
          </Box>
        </Box>
      )}
    </Element>
  );
};

export default ProjectHeader;
