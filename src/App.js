import './App.css';
import BasicCard from "./component/Card";
import Box from "@mui/material/Box";
import {data} from "./data";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
function App() {
  return (
      <Box sx={{display: 'flex', flexDirection: 'row-reverse',justifyContent: 'center', padding: '1em'}}>
          <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
              {data.map((object, i) => <BasicCard obj={object} key={i} />)}
          </Box>

          <Box>
              <Container maxWidth="sm" sx={{ height: '150px',backgroundColor: 'aliceblue', border: '1px none', borderRadius: '.5em', margin:'1em 0'}}>
                  <Typography variant="h5" component="div">
                      Frontend Mentor
                  </Typography>
                  <Typography variant="h6" component="div">
                      Feedback Board
                  </Typography>
              </Container>

              <Container maxWidth="sm"  sx={{ textAlign: 'center',height: '150px',backgroundColor: 'blue', border: '1px none', borderRadius: '.5em', margin:'1em 0'}}>
                  <Button variant="contained" >All</Button>
                  <Button variant="outlined">UI</Button>
                  <Button variant="outlined">UX</Button>
                  <br/>
                  <Button variant="outlined">Enhancement</Button>
                  <Button variant="outlined">Bug</Button>
                  <br/>
                  <Button variant="outlined">Feature</Button>
              </Container>


              <Container maxWidth="sm"  sx={{ height: '150px',backgroundColor: 'blue',textAlign: 'center', border: '1px none', borderRadius: '.5em', margin:'1em 0'}}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                              <ListItem disablePadding >
                                  <ListItemButton role={undefined} dense>
                                      <ListItemIcon>
                                          <IconButton edge="end" >
                                              <CircleIcon sx={{color: 'orange', fontSize: '15px'}} />
                                          </IconButton>
                                      </ListItemIcon>
                                      <ListItemText  primary={`Planned`} />
                                  </ListItemButton>
                              </ListItem>
                            <ListItem disablePadding >
                                  <ListItemButton role={undefined} dense>
                                      <ListItemIcon>
                                          <IconButton edge="end" >
                                              <CircleIcon sx={{color: 'purple', fontSize: '15px'}} />
                                          </IconButton>
                                      </ListItemIcon>
                                      <ListItemText  primary={`In-Progress`} />
                                  </ListItemButton>
                              </ListItem>
                             <ListItem disablePadding >
                                  <ListItemButton role={undefined} dense>
                                      <ListItemIcon>
                                          <IconButton edge="end" >
                                              <CircleIcon sx={{color: 'aqua', fontSize: '15px'}} />
                                          </IconButton>
                                      </ListItemIcon>
                                      <ListItemText  primary={`Live`} />
                                  </ListItemButton>
                              </ListItem>

                  </List>
              </Container>
          </Box>
      </Box>
  );
}

export default App;
