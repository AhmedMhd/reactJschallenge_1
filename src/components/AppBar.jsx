import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import {
    BoxStyle,
    AppBarStyle,
    ToolBarStyleRightSide,
    TypographyStyle,
    ButtonStyle,
    IconSize,
    SpanColor,
    ToolBarStyleLeftSide,
} from '../Style/AppBarStyle'


export default function MenuAppBar({handleOpen}) {
return (
<Box sx={BoxStyle}>
    <AppBar position="static" sx={AppBarStyle}>
    <Toolbar>
        <Box style={ToolBarStyleRightSide}>
            <EmojiObjectsIcon sx={IconSize}/>
            <Typography variant="h6" component="div" sx={TypographyStyle}>
                6 Suggestion
            </Typography>
            <Typography>
                <span style={SpanColor}>Sort by:</span> Most Upvotes 
            </Typography>
            <KeyboardArrowDownIcon />
        </Box>
        <Box style={ToolBarStyleLeftSide}>
            <Button onClick={handleOpen} style={ButtonStyle}>+ Add Feedback</Button>
        </Box>
    </Toolbar>
    </AppBar>
</Box>
);
}
