import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function FeedBackBoard({ title, body }) {
return (
<Box sx={{ minWidth: 275 }} className="Box">
    <Card
    variant="outlined"
    sx={{
        backgroundImage:
        "linear-gradient(45deg, #000046, #FE6B8B 30%,#800080 ,#FF8E53 90% )",
    }}
    >
    {
        <React.Fragment>
        <CardContent sx={{ color: "#fff", marginTop: 7 }}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body2">
                {body}
            </Typography>
        </CardContent>
        </React.Fragment>
    }
    </Card>
</Box>
);
}

export default FeedBackBoard;
