import { tableCellClasses } from "@mui/material/TableCell";

export const TableStyle = { 
    minWidth: 270,
    [`& .${tableCellClasses.root}`]: 
    {borderBottom: "none"},
}

export const TableRowStyle = {
    paddingBottom: 0
}

export const TableCellFirstHeadStyle = {
    fontSize:'18px', 
    fontWeight:'bold', 
    padding: 2,
    paddingBottom: 0
}

export const TableCellSecondHeadStyle = {
    fontSize:'16px', 
    padding: 2, 
    paddingBottom: 0
}

export const FirstListItemStyle = {
    padding: 0
}

export const ListItemIconStyle = {
    marginRight: -2
}

export const SecondListItemStyle = {
    padding: 0, 
    paddingLeft: 3
}

export const TableCellStyle = {
    padding: 1
}