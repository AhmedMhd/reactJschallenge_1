import "./App.css";
import FeedbackBoard from "./components/FeedbackBoard";
import Types from "./components/Types";
import Roadmap from "./components/Roadmap";
import HeaderBar from "./components/Header";
import FeedbackGrid from "./components/Header";


function App() {
  return (
    <div className="App">
      <div className="Left">
        <FeedbackBoard />
        <Types />
        <Roadmap />
      </div>
      <div className="Right">
        <HeaderBar />
        <FeedbackGrid/>
      </div>
    </div>
  );
}

export default App;
