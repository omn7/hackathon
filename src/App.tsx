import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kindergarten from './pages/Kindergarten';
import PostGraduation from './pages/PostGraduation';
import Game from './pages/game'
import Story from './pages/story';
import Course from './pages/course';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kindergarten" element={<Kindergarten />} />
        <Route path="/post-graduation" element={<PostGraduation />} />
        <Route path="/game" element={<Game />} />
        <Route path="/story" element={<Story />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;