import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TaskBoard />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

