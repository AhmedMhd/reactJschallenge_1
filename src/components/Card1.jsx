import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
<React.Fragment>
    <CardContent  sx={{color: '#fff', marginTop: 7}}>
    <Typography variant="h6" component="div">
        Front-End Mentor
    </Typography>
    <Typography variant="body2">
    feedback board
    </Typography>
    </CardContent>
</React.Fragment>
);

export default function Card1() {
return (

    <Box sx={{ minWidth: 275}} className="Box" >
    <Card variant="outlined" sx={{backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }}>
        {card}
    </Card>
    </Box>
//backgroundImage: 'linear-gradient(to right, #5fadee, #bf7cf6, #f46bda)'

);
}
