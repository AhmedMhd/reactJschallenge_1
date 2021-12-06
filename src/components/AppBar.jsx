import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';


export default function MenuAppBar() {


return (
<Box sx={{ marginBottom: 3 }}>
    <AppBar position="static" sx={{  backgroundColor: '#373e68', borderRadius: 2}}>
    <Toolbar>
        <div style={{display: 'flex', justfiyContent: 'flex-start',flexDirection: 'row', alignItems: 'center' ,width: '45%'}}>
        <EmojiObjectsIcon sx={{fontSize:24}}/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 3 }}>
            6 Suggestion
        </Typography>
            <Typography>
                <span style={{color: '#ccc'}}>Sort by:</span> Most Upvotes 
            </Typography>
            <KeyboardArrowDownIcon />
        </div>
        <div style={{width: '45%', display:'flex', justifyContent: 'flex-end', width: '55%'}}>
            <Button style={{backgroundImage: 'linear-gradient(45deg, #000046, #FE6B8B 30%,#800080)', color: '#fff'}}>+ Add Feedback</Button>
        </div>
    </Toolbar>
    </AppBar>
</Box>
);
}
