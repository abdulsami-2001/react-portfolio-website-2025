import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ServicePage from './components/ServicePage';
import { serviceRoutes } from './routes/serviceRoutes';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Mobile_App_Development from './assets/Mobile_App_Development.jpeg'
import Software_Engineering_Internship from './assets/Software_Engineering_Internship.jpeg'
import BSCS from './assets/BSCS.jpeg'
import WorkExperienceandEducation from './components/WorkExperienceandEducation';

const App = () => {
  const certificatesData = [
    {
      name: "Mobile App Development",
      description: "Government Certificate of Training by IT industry academia bridge program in collaboration with Hazza Institute of Technology of Mobile App Development ( React Native ) ",
      image: Mobile_App_Development
    },
    {
      name: "Software Engineering Internship",
      description: "Certificate of Experience in recognition of exemplary work by VentureDive after completing React Native Mobile Development Internship",
      image: Software_Engineering_Internship
    },
    {
      name: "4 Years Bachelors Degree Certificate",
      description: "Completed a 4-year Bachelor of Science in Computer Science, achieving a strong cumulative GPA of 3.47 on a 4.0 scale",
      image: BSCS
    }
  ];

  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Muhammad Sami - Product Engineer',
      '/graphic-design': 'Muhammad Sami - Graphic Design',
      '/development-and-programming': 'Muhammad Sami - Development and Programming',
      '/virtual-assistant': 'Muhammad Sami - Virtual Assistant',
    };

    document.title = pageTitles[location.pathname] || 'Muhammad Sami';
  }, [location]);

  return (
    <>
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
      <WorkExperienceandEducation />
      <Certificates certificates={certificatesData} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;