import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


const card = (
<React.Fragment>
    <CardContent sx={{display: 'flex', justifyContent:'space-around'}}>
    
    <div style={{display: 'flex', justifyContent:'flex-start', width: '70%'}}>
        <div style={{backgroundColor: '#eee', padding: 5, width: 30, height: 55,borderRadius: 5, textAlign: 'center'}}>
            <KeyboardArrowUpIcon/>
            <br/>
            <span>122</span>
        </div>

        <div style={{marginLeft: 30}}>
            <Typography variant="h6" sx={{color: '#373e68', fontWeight: 'bold'}}>
                Add tags for solution
            </Typography>
            <Typography variant="body2" sx={{color: '#aaa', marginBottom: 2}}>
                Easier to search for solution based on a specific stack.
            </Typography>
            <Button style={{backgroundColor: '#eee'}}>Enhanecment</Button>
        </div>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-end',alignItems: 'center',width: '30%'}}>
        <span><ChatBubbleIcon sx={{color: '#ddd'}}/></span>
        <span style={{fontWeight: 'bold', padding: 3}}>2</span>
    </div>
    </CardContent>
</React.Fragment>
);

export default function FeedBackCard() {
return (
    <Box >
        <Card variant="outlined" >{card}</Card>
        <br/>
    </Box>
);
}
