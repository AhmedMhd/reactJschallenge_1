import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
   MainContainer :{
       display: 'flex',
       flexDirection: 'row-reverse',
       justifyContent: 'center',
       padding: '1em'
   },

   CardsContainer: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       width: '60%'
    },

    FirstContainer: {
        height: '180px',
        width: '300px',
        border: '1px none',
        borderRadius: '.5em',
        margin:'1em 0',
        background: 'linear-gradient(60deg, #7299F6 30%, #A63EE9,#D6609C,#E48D93)',
        color: 'white',
        textAlign: 'left',
        paddingTop: '6em'
    },
    Typography: {
        fontFamily: 'poppins',
    },
    title: {
        fontWeight: "bold"
    },
    content: {
       fontWeight: '500'
    },
    SecondContainer: {
        height: 'fit-content',
        backgroundColor: 'white',
        border: '1px none',
        borderRadius: '.5em',
        margin:'1em 0',
        padding: '1em'
    },
    ActiveButton: {
        color: 'white',
        fontFamily: 'poppins',
        border: 'none',
        borderRadius: '1em',
        boxShadow: 'none',
        margin: '.5em'
    },
    Buttons: {
        backgroundColor: '#F6F9FF',
        color: 'blue',
        fontFamily: 'poppins',
        border: 'none',
        borderRadius: '1em',
        boxShadow: 'none',
        margin: '.5em'
    },
    ThirdContainer: {
        height: 'fit-content',
        backgroundColor: 'white',
        textAlign: 'center',
        border: '1px none',
        borderRadius: '.5em',
        margin:'1em 0',
        padding: '2em 1.5em'
    },
    roadmapTitle: {
        fontWeight: "bold",
        color: '#373E68'
    },
    a: {
        fontFamily: 'poppins'
    },
    ListItem: {
        fontFamily: 'poppins'
    }
});