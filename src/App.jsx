import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ServicePage from './components/ServicePage';
import { serviceRoutes } from './routes/serviceRoutes';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.keys(serviceRoutes).map(path => (
          <Route
            key={path}
            path={`/${path}`}
            element={<ServicePage {...serviceRoutes[path]} path={path} />}
          />
        ))}
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;