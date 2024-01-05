import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyReviews from './components/MyReviews';
import ManageAddresses from './components/ManageAddresses';
import Notfound from './components/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MyReviews />} />
          <Route path="ManageAddresses" element={<ManageAddresses />} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
