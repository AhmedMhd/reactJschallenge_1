import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
<React.Fragment>
    <CardContent  sx={{color: '#fff', marginTop: 7}}>
    <Typography variant="h6" component="div">
        {/* i want use props here */}
    {}
    Front-end mentor
    </Typography>
    <Typography variant="body2">
        {/* and here also */}
    feedback board
    </Typography>
    </CardContent>
</React.Fragment>
);
export default function FeedBackBoard(props) {
return (

    <Box sx={{ minWidth: 275}} className="Box" >
    <Card variant="outlined" title={props.title} sx={{backgroundImage: 'linear-gradient(45deg, #000046, #FE6B8B 30%,#800080 ,#FF8E53 90% )'
    }}>
        {card}
    </Card>
    </Box>

);
}
