import { Box, List, ListItem, Typography } from "@mui/material";

const TileList = (props) => {
    const features = props.features;
    return(
        <Box textAlign="left" bgcolor="#FFF0E2" borderRadius="6px" display="flex" padding="45px" flexDirection="column">
            <Typography color="#3A00B5" paddingBottom={3}>{props.description}</Typography>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
                {features.map((feature, index) => (
                    <ListItem sx={{ display: "list-item", color: "#3A00B5" }} key={index}>
                        <Typography color="#3A00B5">{feature}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default TileList;