import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import {TypographyStyle, ButtonStyle} from '../Style/FilterCardStyle'


const list = [
    'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'
]
const card = (
<React.Fragment>
    <CardContent>
        <Typography variant="body1" sx={TypographyStyle}>
            Types Of Feedback:
        </Typography>
        {
            list.map((item, index) => {
                return <Button 
                variant="contained" 
                size="small" 
                key={index} 
                sx={ButtonStyle}
                >
                    {item}
                </Button>
            })
        }
    </CardContent>
</React.Fragment>
);

export default function FilterCard() {
return (

    <Box sx={{ minWidth: 275}} className="Box" >
        <Card variant="outlined">
            {card}
        </Card>
    </Box>
);
}
