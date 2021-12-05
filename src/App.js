import './App.css';
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import MenuAppBar from './components/AppBar'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
      <Card1 title="Front-end mentor" body="Feedback Board"/>
      <Card2/>
      <Card3/>
      </div>
      <div className="mainSection">
        <MenuAppBar />
      </div>
    </div>
  );
}

export default App;
