import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={15} country={'in'} category={'general'} />} />
            <Route path="/science" element={<News key="science" pageSize={15} country={'in'} category={'science'} />} />
            <Route path="/technology" element={<News key="technology" pageSize={15} country={'in'} category={'technology'} />} />
            <Route path="/business" element={<News key="business" pageSize={15} country={'in'} category={'business'} />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={15} country={'in'} category={'entertainment'} />} />
            <Route path="/health" element={<News key="health" pageSize={15} country={'in'} category={'health'} />} />
            <Route path="/sports" element={<News key="sports" pageSize={15} country={'in'} category={'sports'} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
