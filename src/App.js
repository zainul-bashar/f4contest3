import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';
import './App.css';

function App() {
  
  return (
    <div>
       <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/' element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
