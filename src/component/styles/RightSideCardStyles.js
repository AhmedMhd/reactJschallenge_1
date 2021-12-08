import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    Card: {
        display: 'flex' ,
        padding: '2em 2.5em 1.5em',
        width: '100%',
        margin: '0 0 2em',
        boxShadow: 'unset',
        borderRadius: '.7em'
    },
    CardButton: {
        display: 'flex',
        flexDirection: 'column',
        height: '60px',
        border: '1px none',
        borderRadius: '1em',
        backgroundColor: '#F6F9FF',
        padding: '1.2em 1.1em 1em',
        minWidth: 'unset',
    },
    CardContent: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 2em',
        gap: '.5em'
    },
    Typography: {
        fontFamily: 'poppins'
    },
    title: {
        fontWeight: '600',
        fontSize: '19px',
        color: '#373E68'
    },
    content: {
        color: '#5e5e70'
    },
    feature: {
        color: 'blue',
        border: '1px none',
        borderRadius: '1em',
        padding: '.3em 1em',
        backgroundColor: '#F6F9FF',
        width: 'fit-content',
        fontWeight: '500'
    },
    IconStyle :{
        fill: '#8c8c9b'
    },
    CommentContainer :{
        display: 'flex',
        marginLeft: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        gap: '.7em',
        fontFamily: 'poppins',
        fontWeight: '600',
        color: '#373E68'
    }
});

