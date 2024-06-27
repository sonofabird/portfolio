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
    </Box>
  );
};

export default TileGrid;
