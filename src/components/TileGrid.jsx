import { Box, Grid, Typography } from "@mui/material";

const TileGridItem = (props) => {
  return (
    <Grid item xs={props.index % 2 == 0 ? 7 : 3}>
      <Typography
        variant="h2"
        color="#3A00B5"
        paddingBottom="16px"
        sx={{ textTransform: "uppercase" }}
      >
        {props.title}
      </Typography>
      <Typography variant="b1" color="#3A00B5">
        {props.body}
      </Typography>
    </Grid>
  );
};

const TileGrid = (props) => {
  const descriptionArray = props.description;

  return (
    <Box
      textAlign="left"
      bgcolor="#FFF0E2"
      borderRadius="6px"
      display="flex"
      padding="35px"
      paddingX="10%"
    >
      {screen.width > 400 ? (
        <Grid container columns={{ xs: 10 }} spacing={{ xs: "72px" }}>
          {descriptionArray.map((desc, index) => (
            <TileGridItem
              title={desc.title}
              body={desc.body}
              key={index}
              index={index}
            />
          ))}
        </Grid>
      ) : (
        <Box>
          {descriptionArray.map((desc, index) => (
            <Box paddingY="5%" key={index}>
              <Typography fontSize="100%" variant="h2" fontWeight={550}>
                {desc.title}
              </Typography>
              <Typography fontSize="100%" variant="b1">
                {desc.body}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TileGrid;
