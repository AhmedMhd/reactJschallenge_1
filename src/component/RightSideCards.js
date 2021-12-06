import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStyles } from './styles/RightSideCardStyles';


export default function BasicCard(props) {
   const classes = useStyles();
    return (
            <Card className={classes.Card}>
                <Button className={classes.CardButton}><KeyboardArrowUpIcon style={{fill: "blue"}} /><span style={{color: '#373E68', fontFamily: 'poppins', fontWeight: 'bold'}}>112</span></Button>
                    <Box >
                        <CardContent className={classes.CardContent}>
                            <Typography variant="h5" component="div" className={`${classes.Typography} ${classes.title}`} >
                                {props.obj.title}
                            </Typography>
                            <Typography variant="body2" className={`${classes.Typography} ${classes.content}`}>
                                {props.obj.content}
                            </Typography>
                            <Typography variant="body2" className={`${classes.Typography} ${classes.feature}`}>
                                {props.obj.feature}
                            </Typography>
                        </CardContent>
                    </Box>
                <Box  className={classes.CommentContainer}><MapsUgcIcon className={classes.IconStyle}/><span>4</span></Box>
            </Card>
    );
}
