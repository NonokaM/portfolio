import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/HeaderComponent/Header';
import HomePage from './components/HomePageComponent/HomePage';
import Skill from './components/SkillComponent/Skill';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
