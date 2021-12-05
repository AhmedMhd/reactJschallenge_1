import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const list = [
    'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'
]
const card = (
<React.Fragment>
    <CardContent>
        {
            list.map((item, index) => {
                return <Button variant="contained" size="small" key={index} sx={{backgroundColor:'#ddd', color:'#031466', margin:'5px 10px',minWidth:'20px'}}>{item}</Button>
            })
        }
    </CardContent>
</React.Fragment>
);

export default function Card2() {
return (

    <Box sx={{ minWidth: 275}} className="Box" >
        <Card variant="outlined">
            {card}
        </Card>
    </Box>
);
}
