import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import MovieNewsPage from './components/MovieNewsPage';
import Navigation from './components/Navigation';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<MovieNewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
