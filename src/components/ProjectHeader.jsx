import { Box, Typography } from "@mui/material";
import project_head from "../assets/p1/project_head.png";
import preview from "../assets/p1/preview.png";

const ProjectHeader = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box>
        <img src={project_head} />
        <Typography variant="h5" textAlign={"left"} width={500}>
          Mentra AI is a platform in which starting entrepreneurs can receive
          guidance while building a business plan in a low-pressure environment.
          The platform is centred around the Mentra AI chatbot, which gives
          users advice, suggestions, resources and connections relevant to their
          business plan.
        </Typography>
      </Box>
      <Box position="absolute" marginTop={-50} right={0}>
        <img src={preview} />
      </Box>
    </Box>
  );
};

export default ProjectHeader;
