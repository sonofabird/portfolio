import { Box, Typography, Grid } from "@mui/material"

const GridItem = (props) => {
    return(
        <Grid item xs={props.xs}>
            <Box display="flex" flexDirection="column" textAlign="left" padding={4}>
                <Typography>{props.title}</Typography>
                <Typography>{props.body}</Typography>
            </Box>
        </Grid>
    )
}

const ProjectTemplate = (props) => {
    const project = props.project;

    return(
        <Box sx={{ width: "100vw" }} display="flex" flexDirection="column" alignItems="center">
            <Box sx={{ height: "24vh", width: "80%" }} bgcolor="#EDE8F4" textAlign="left" display="flex" flexDirection="column" justifyContent="end" padding={4}>
                <Typography variant="h4" color="#000000">{project.title}</Typography>
                <Typography variant="h6" color="#000000">{project.subtitle}</Typography>
            </Box>
            <Box sx={{ width:"80%" }} textAlign="left" padding={4}>
                <Typography paddingBottom={2}>{project.description1}</Typography>
                <Typography>{project.description2}</Typography>
            </Box>
            <Grid container sx={{ width: "80%" }} paddingY={4}>
                <GridItem title="ROLE" body={project.role} xs={8}/>
                <GridItem title="TEAM" body={project.team} xs={4}/>
                <GridItem title="TOOLS" body={project.tools} xs={8}/>
                <GridItem title="DURATION" body={project.duration} xs={4}/>
            </Grid>
            <Box paddingY={4}>
                <img src={props.img} alt="Project Image"/>
            </Box>
            <Box sx={{ width:"80%", whiteSpace: "pre-wrap" }} textAlign="left" padding={4}>
                <Typography>the problem: {project.problem}</Typography>
                <Typography paddingY={2}>{project.problemDescription1}</Typography>
                <Typography>{project.problemDescription2}</Typography>
            </Box>
        </Box>
    )
}

export default ProjectTemplate