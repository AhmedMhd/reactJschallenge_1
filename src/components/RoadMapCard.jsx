import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import Link from '@mui/material/Link';
import {
    TableRowStyle, 
    TableStyle, 
    TableCellFirstHeadStyle,
    TableCellSecondHeadStyle,
    FirstListItemStyle,
    SecondListItemStyle,
    ListItemIconStyle,
    TableCellStyle} 
    from '../Style/RoadMapStyle'


function createData(name, view, color) {
return { name, view, color};
}

const rows = [
createData('Planned', 2, 'orange'),
createData('In-Progress', 3, 'purple'),
createData('Live', 1, 'aqua'),
];

export default function RoadMapCard() {
return (
<TableContainer component={Paper} sx={{overflowX: 'hidden'}}>
    <Table sx={TableStyle} aria-label="simple table">
    <TableHead>
        <TableRow sx={TableRowStyle}>
        <TableCell sx={TableCellFirstHeadStyle}>RoadMap</TableCell>
        <TableCell align="left" sx={TableCellSecondHeadStyle}><Link href="#">View</Link></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow sx={TableRowStyle}>
            <TableCell sx={{padding: 1}}>
            <List>
                {
                    rows.map((item,index)=> {
                        return <ListItem key={index}  sx={FirstListItemStyle}>
                                    <ListItemIcon sx={ListItemIconStyle}>
                                        <IconButton edge="end" >
                                            <CircleIcon sx={{color: `${item.color}`, fontSize: '14px'}} />
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                </ListItem>
                    })
                }
            </List>
            </TableCell>
            <TableCell sx={TableCellStyle}>
            {
                rows.map((item,index)=> {
                    return <ListItem key={index} sx={SecondListItemStyle}>
                                <ListItemText primary={item.view}/>
                            </ListItem>
                })
                }
            </TableCell>
        </TableRow>
    </TableBody>
    </Table>
</TableContainer>
);
}
