import BasicCard from "./component/RightSideCards";
import Box from "@mui/material/Box";
import {data} from "./data";
import * as React from "react";
import LeftSideContainers from "./component/LeftSideContainers";
import UpperBar from "./component/UpperBar";

function App() {
  return (
      <Box sx={{display: 'flex', flexDirection: 'row-reverse',justifyContent: 'center', padding: '1em 4em', gap: '5em'}}>
          <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
              <UpperBar/>
              <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                  {data.map((object, i) => <BasicCard obj={object} key={i} />)}
              </Box>
          </Box>


          <LeftSideContainers/>

      </Box>
  );
}

export default App;
