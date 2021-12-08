import React from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import CircleIcon from "@mui/icons-material/Circle";
import ListItemText from "@mui/material/ListItemText";
import {useStyles} from "./styles/leftSideContainerStyles";

function LeftSideContainers() {
    const classes = useStyles()

    return (
        <Box>
            <Container className={classes.FirstContainer}>
                <Typography variant="h5" component="div" className={`${classes.Typography} ${classes.title}`}>
                    Frontend Mentor
                </Typography>
                <Typography variant="h6" component="div" className={`${classes.Typography} ${classes.content}`}>
                    Feedback Board
                </Typography>
            </Container>

            <Container  className={classes.SecondContainer} >
                <Button variant="contained" className={classes.ActiveButton}>All</Button>
                <Button className={classes.Buttons}>UI</Button>
                <Button className={classes.Buttons}>UX</Button>
                <br/>
                <Button className={classes.Buttons}>Enhancement</Button>
                <Button className={classes.Buttons}>Bug</Button>
                <br/>
                <Button className={classes.Buttons}>Feature</Button>
            </Container>

            <Container  className={classes.ThirdContainer}>
                <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding: '0 1.5em'}}>
                    <Typography variant="h6" component="div" className={`${classes.Typography} ${classes.roadmapTitle}`}>
                        Roadmap
                    </Typography>
                    <a href="#" className={classes.a}>View</a>
                </Box>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem disablePadding  >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <IconButton edge="end" >
                                    <CircleIcon sx={{color: 'orange', fontSize: '15px'}} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontFamily: 'poppins'}}  primary={`Planned`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <IconButton edge="end" >
                                    <CircleIcon sx={{color: 'purple', fontSize: '15px'}} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText  primary={`In-Progress`} primaryTypographyProps={{fontFamily: 'poppins'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <IconButton edge="end" >
                                    <CircleIcon sx={{color: 'aqua', fontSize: '15px'}} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText  primary={`Live`} primaryTypographyProps={{fontFamily: 'poppins'}}/>
                        </ListItemButton>
                    </ListItem>

                </List>
            </Container>
        </Box>
    );
}

export default LeftSideContainers;