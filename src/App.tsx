import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kindergarten from './pages/Kindergarten';
import PostGraduation from './pages/PostGraduation';
import Game from './pages/game'
import Story from './pages/story';
import Course from './pages/course';
import Undergrad from './pages/undergrad';
import Experement from '../src/components/experement';
import Quiz from './components/quiz';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kindergarten" element={<Kindergarten />} />
        <Route path="/post-graduation" element={<PostGraduation />} />
        <Route path="/game" element={<Game />} />
        <Route path="/story" element={<Story />} />
        <Route path="/course" element={<Course />} />
        <Route path="/undergrad" element={<Undergrad />} />
        <Route path="/experement" element={ <Experement />} />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </Router>


</>
  );
}

export default App;