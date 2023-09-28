import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main-css/main.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Home from './pages/Home';
import Card from './pages/Card';
import Error from './pages/Error';
import Construction from './pages/Construction';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <div className="contenu">
        <Aside />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card/:cardId" element={<Card />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
