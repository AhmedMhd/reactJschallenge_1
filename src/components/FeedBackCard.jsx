import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {
    CardContentStyle,
    CardContentRightSide,
    NumberOfViewes,
    TypographyHeading,
    TypographyBody,
    ButtonStyle,
    DivOfCommentStyle,
    IconColor,
    SpanWithIconStyle
} from '../Style/FeedBackCardStyle'


export default function FeedBackCard(props) {
return (
    <Box >
        <Card variant="outlined" >
            <React.Fragment>
                <CardContent sx={CardContentStyle}>
                    <Box style={CardContentRightSide}>
                        <Box style={NumberOfViewes}>
                            <KeyboardArrowUpIcon/>
                            <br/>
                            <span>{props.item.number}</span>
                        </Box>

                        <Box style={{marginLeft: 30}}>
                            <Typography variant="h6" sx={TypographyHeading}>
                                {props.item.title}
                            </Typography>
                            <Typography variant="body2" sx={TypographyBody}>
                                {props.item.description}
                            </Typography>
                            <Button style={ButtonStyle}>{props.item.type.toUpperCase()}</Button>
                        </Box>
                    </Box>

                    <Box style={DivOfCommentStyle}>
                        <span><ChatBubbleIcon sx={IconColor}/></span>
                        <span style={SpanWithIconStyle}>2</span>
                    </Box>
                </CardContent>
            </React.Fragment>
        </Card>
        <br/>
    </Box>
);
}
