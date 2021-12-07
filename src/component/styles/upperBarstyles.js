import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    Box1: {
        display: 'flex',
        backgroundColor: '#373E68',
        padding: '1.5em 2em',
        width: '100%',
        marginBottom: '2em',
        borderRadius: '.5em',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Box2: {
        display: 'flex',
        alignItems: 'center'
    },
    Typography: {
        color: 'white',
        fontFamily: 'poppins',
        fontWeight: "600",
    },
    Button1: {
        color: "white",
        backgroundColor: "unset",
        fontFamily: 'poppins',
        fontWeight: '600',
        fontSize: '12px',
        textTransform: 'capitalize'
    },
    Button2: {
        backgroundColor: '#AE1FE9',
        fontFamily: 'poppins',
        fontWeight: '600',
        padding: '.8em 2em',
        textTransform: 'capitalize',
        borderRadius: '1em'
    }
});
