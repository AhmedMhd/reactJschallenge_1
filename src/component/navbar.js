import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Navbar(props) {
    return (
        <div style={{
            backgroundColor: 'blue',
            width: '50%'
        }}>
            <Button variant="contained" style={{ textTransform: 'capitalize',backgroundColor: 'purple', }}>Add feedback</Button>
        </div>
    );
}

export default Navbar;