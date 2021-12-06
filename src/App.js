import './App.css';
import FeedBackCard from './components/FeedBackCard'
import FeedBackBoard from './components/FeedBackBoard'
import FilterCard from './components/FilterCard'
import RoadMapCard from './components/RoadMapCard'
import MenuAppBar from './components/AppBar'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
      <FeedBackBoard title="Front-end mentor" body="Feedback Board"/>
      <FilterCard/>
      <RoadMapCard/>
      </div>
      <div className="mainSection">
        <MenuAppBar />
        <FeedBackCard/>
        
        <FeedBackCard/>
      </div>
    </div>
  );
}

export default App;
