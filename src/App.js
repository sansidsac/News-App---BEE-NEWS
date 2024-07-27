import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const apiKey=process.env.REACT_APP_NEWS_API;
  const[progress,setProgress]=useState(0);
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar
          color='rgb(255, 255, 255)'
          progress={progress}

          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={'in'} category={'general'} />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country={'in'} category={'science'} />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country={'in'} category={'technology'} />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={'in'} category={'business'} />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={'in'} category={'entertainment'} />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country={'in'} category={'health'} />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country={'in'} category={'sports'} />} />
          </Routes>
        </div>
      </Router>
    )
  }

export default App