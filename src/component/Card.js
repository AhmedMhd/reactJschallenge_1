import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function BasicCard(props) {
    return (
            <Card sx={{ minWidth: 275 , display: 'flex' ,padding: '1em'}}>
                <Button variant="outlined"><KeyboardArrowUpIcon/>112</Button>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {props.obj.title}
                            </Typography>
                            <Typography variant="body2">
                                {props.obj.content}
                            </Typography>
                        </CardContent>
                        <Typography variant="body2">
                            {props.obj.feature}
                        </Typography>
                    </Box>
                <MapsUgcIcon/>
            </Card>


    );
}
