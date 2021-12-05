import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from "@mui/material/TableCell";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import Link from '@mui/material/Link';


function createData(name, view, color) {
return { name, view, color};
}

const rows = [
createData('Planned', 2, 'orange'),
createData('In-Progress', 3, 'purple'),
createData('Live', 1, 'aqua'),
];

export default function BasicTable() {
return (
<TableContainer component={Paper} sx={{overflowX: 'hidden'}}>
    <Table 
    sx=
    {{ minWidth: 270,
        [`& .${tableCellClasses.root}`]: 
        {borderBottom: "none"},
    }} 
    aria-label="simple table"
    >
    <TableHead>
        <TableRow sx={{paddingBottom: 0}}>
        <TableCell sx={{fontSize:'18px', fontWeight:'bold', padding: 2,paddingBottom: 0}}>RoadMap</TableCell>
        <TableCell align="left" sx={{fontSize:'16px', padding: 2, paddingBottom: 0}}><Link href="#">View</Link></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow sx={{paddingTop: 0}}>
            <TableCell sx={{padding: 1}}>
            <List>
                {
                    rows.map((item,index)=> {
                        return <ListItem key={index}  sx={{padding: 0}}>
                                    <ListItemIcon sx={{marginRight: -2}}>
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
            <TableCell sx={{padding: 1}}>
            {
                rows.map((item,index)=> {
                    return <ListItem key={index} sx={{listStyleType:'circle', padding: 0, paddingLeft: 3}}>
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
