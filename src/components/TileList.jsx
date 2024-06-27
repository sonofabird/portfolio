import { Box, List, ListItem, Typography } from "@mui/material";

const TileList = (props) => {
  const features = props.features;
  return (
    <Box>
      {screen.width > 400 ? (
        <Box
          textAlign="left"
          bgcolor="#FFF0E2"
          borderRadius="6px"
          display="flex"
          padding="45px"
          flexDirection="column"
        >
          <Typography color="#3A00B5" paddingBottom={3} variant="bullets">
            {props.description}
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            {features.map((feature, index) => (
              <ListItem
                sx={{ display: "list-item", color: "#3A00B5" }}
                key={index}
              >
                <Typography color="#3A00B5" variant="bullets">
                  {feature}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Box
          textAlign="left"
          bgcolor="#FFF0E2"
          borderRadius="6px"
          display="flex"
          padding="10%"
          flexDirection="column"
        >
          <Typography fontSize="100%" color="#3A00B5" paddingBottom={3} variant="bullets">
            {props.description}
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            {features.map((feature, index) => (
              <ListItem
                sx={{ display: "list-item", color: "#3A00B5" }}
                key={index}
              >
                <Typography fontSize="80%" color="#3A00B5" variant="bullets">
                  {feature}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default TileList;
