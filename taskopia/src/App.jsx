import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import TaskBoard from './components/TaskBoard/TaskBoard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';
import './App.css';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ['Arsenal', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'].join(', ')
      ,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Weather />
          <Routes>
            <Route path="/" element={<TaskBoard />} />           
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;

