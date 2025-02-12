import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  const skills = [
    "Graphic Design",
    "Social Media Content",
    "Canva",
    "Brand Identity & Guidelines",
    "Social Media Design",
    "Social Media Graphic",
    "Presentation Design",
    "Adobe Creative Suite",
    "Poster Design",
    "Social Media Imagery",
    "Adobe Photoshop",
    "Content Creation",
    "Social Media Account Setup",
    "Branding",
    "Social Media Carousel"
  ];

  const projects = [
    {
      title: "Brand Identity Package",
      description: "Complete branding solution for a startup including logo, color palette, and typography",
      tech: ["Adobe Illustrator", "Canva", "Brand Guidelines"]
    },
    {
      title: "Social Media Campaign",
      description: "Series of cohesive social media posts for a fitness influencer",
      tech: ["Adobe Photoshop", "Canva", "Instagram Templates"]
    },
    {
      title: "Product Packaging Design",
      description: "Eye-catching packaging design for organic skincare line",
      tech: ["3D Mockups", "Adobe Dimension", "Print Design"]
    }
  ];

  return (
    <>
      <Header />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </>
  )
}

export default App
