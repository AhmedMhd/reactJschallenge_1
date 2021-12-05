import logo from './logo.svg';
import './App.css';
import BasicCard from "./component/Card";
import PrimarySearchAppBar from "./component/navbar";
import Navbar from "./component/navbar";

function App() {
  return (
      <>
          <Navbar/>
          {objects.map((object, i) => <BasicCard obj={object} key={i} />)}
      </>

  );
}

export default App;
