import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FishProvider } from './context/FIshesContext'

import Home from './pages/Home';
import RegionDetails from './pages/RegionDetails';

const App = () => {
  return (
    <FishProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/regions/:regionName' element={<RegionDetails />} />
        </Routes>
      </BrowserRouter>
    </FishProvider>
  )
}

export default App