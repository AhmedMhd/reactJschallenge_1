import { useState } from "react";
import FeedBackBoard from "./FeedBackBoard";
import FilterCard from "./FilterCard";
import RoadMapCard from "./RoadMapCard";
import MenuAppBar from "./AppBar";
import Model from "./Model";
import InfoOfFeedBacks from "./InfoOfFeedBacks";
import '../Style/FeedBackPageStyle.css';
import { Box } from "@mui/system";

function FeedBackPage() {
const [open, setOpen] = useState(false);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [type, setType] = useState("");
const [number, setNumber] = useState("");
const [feedbacks, setFeedbacks] = useState([
{
    title: "Add tags for solution",
    description: "Easier to search for solutions",
    type: "Enhanecment",
    number: 143,
},
]);

const handleOpen = () => setOpen(true);

const handleClose = () => setOpen(false);

const changeTitle = (event) => {
setTitle(event.target.value);
};
const changeDescription = (event) => {
setDescription(event.target.value);
};
const changeType = (event) => {
setType(event.target.value);
};
const changeNumber = (event) => {
setNumber(event.target.value);
};
//I didn't know how to reset the inputs after submit
const handleReset = (e) => {

}

const AddFeedBack = () => {
let feedBackTitle = title;
let feedBackDesc = description;
let feedBackType = type;
let feedBackNum = number;
if (feedBackTitle && feedBackDesc && feedBackType && feedBackNum) {
    let arrayOfFeedbacks = [...feedbacks];
    arrayOfFeedbacks.push({
    title: title,
    description: description,
    type: type,
    number: number,
    });
    setFeedbacks(arrayOfFeedbacks);
}

};
return (
<Box className="page">
    <Box className="sideBar">
    <FeedBackBoard title="Front-end mentor" body="Feedback Board" />
    <FilterCard />
    <RoadMapCard />
    </Box>

    <Box className="mainSection">
    <MenuAppBar handleOpen={handleOpen} />
    <Model
        open={open}
        title={title}
        description={description}
        number={number}
        type={type}
        handleClose={handleClose}
        changeTitle={changeTitle}
        changeDescription={changeDescription}
        changeType={changeType}
        changeNumber={changeNumber}
        AddFeedBack={AddFeedBack}
        handleReset={handleReset}
    />
    <InfoOfFeedBacks feedbacks={feedbacks} />
    </Box>
</Box>
);
}

export default FeedBackPage;
