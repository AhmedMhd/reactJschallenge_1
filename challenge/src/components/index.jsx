import * as React from 'react';
import './index.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Index = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };


    return (
        <div className="wrapper">
            <div className="sideBar">
                <div className="feedname">
                    <h3>Frontend Mentor</h3>
                    <span>Feedback Board</span>
                </div>
                <div className="tags">
                <button>All</button>
                <button>UI</button>
                <button>UX</button>
                <button>Enhacement</button>
                <button>Bug</button>
                <button>Feature</button>
                </div>
                <div className="roadMap">
                    <div className="mapHead">
                        <span>Roadmap</span>
                        <span>View</span>
                    </div>
                    <div className="mapRow">
                        
                        <div className="row">
                        <span>Planned</span>
                        <span>2</span>
                        </div>

                        <div className="row">
                        <span>In Progress</span>
                        <span>3</span>
                        </div>

                        <div className="row">
                        <span>Live</span>
                        <span>1</span>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="feedback">
                <div className="resultHeader">
                    
                    <span className="suggestion"> <MilitaryTechIcon/> 3 Suggestions</span>
                    <span>Sort By:
                    <Box sx={{ minWidth: 120,
                      height:"56px",
                      color:'white'}}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box></span>
                    <button>+ Add Feedback</button>
                </div>
                <div className="resultList">
                    <div className="result">
                        <span className="like"><KeyboardArrowUpIcon/> 99</span>
                        <div className="description">
                            <span className="title">Add Tag for solution</span>
                            <span className="info">Easier search for solution based on a specific stack.</span>
                            <button>Featured</button>
                        </div>
                        <span className="comment"><ChatBubbleIcon></ChatBubbleIcon>5</span>
                    </div>
                    <div className="result">
                        <span className="like"><KeyboardArrowUpIcon/> 99</span>
                        <div className="description">
                            <span className="title">Add Tag for solution</span>
                            <span className="info">Easier search for solution based on a specific stack.</span>
                            <button>Featured</button>
                        </div>
                        <span className="comment"><ChatBubbleIcon></ChatBubbleIcon>5</span>
                    </div>
                    <div className="result">
                        <span className="like"><KeyboardArrowUpIcon/> 99</span>
                        <div className="description">
                            <span className="title">Add Tag for solution</span>
                            <span className="info">Easier search for solution based on a specific stack.</span>
                            <button>Featured</button>
                        </div>
                        <span className="comment"><ChatBubbleIcon></ChatBubbleIcon>5</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Index;
