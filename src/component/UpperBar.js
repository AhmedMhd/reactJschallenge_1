import React from 'react';
import Box from "@mui/material/Box";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Typography from "@mui/material/Typography";
import {useStyles} from "./styles/upperBarstyles";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

function UpperBar(props) {
    const classes = useStyles();
    return (
        <Box className={classes.Box1}>
            <Box className={classes.Box2}>
                <TipsAndUpdatesIcon style={{fill: 'white',  marginRight: '1em'}}/>
                <Typography variant="h6" component="div" className={classes.Typography}>
                    6 Suggestions
                </Typography>
            </Box>

            <span style={{color: 'white',fontFamily: 'poppins',fontWeight: '600',fontSize: '12px'}}>Sort by :<Button className={classes.Button1}>Most Upvote <KeyboardArrowDownIcon style={{fontSize: '18px'}}/></Button></span>

            <Button variant={"contained"} className={classes.Button2}><AddIcon style={{fontSize: '19px',marginRight: '.2em'}}/> Add Feedback</Button>
        </Box>
    );
}

export default UpperBar;