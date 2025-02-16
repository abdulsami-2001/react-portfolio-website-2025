// Home.jsx
import React from 'react';
import Muhammad_Sami from '../assets/Muhammad_Sami.png';
import { Link } from 'react-router-dom';
import { serviceRoutes } from '../routes/serviceRoutes';
import Marquee from 'react-fast-marquee';
import Certificates from '../components/Certificates';
import Mobile_App_Development from '../assets/Mobile_App_Development.jpeg'
import Software_Engineering_Internship from '../assets/Software_Engineering_Internship.jpeg'
import BSCS from '../assets/BSCS.jpeg'
import Clients_Feedback from '../assets/Clients_Feedback.json';
import ClientsFeedback from '../components/ClientsFeedback';
import Projects from '../components/Projects';
import ProjectsJSON from '../assets/Projects.json'

const Home = () => {
    // Get random projects from each category
    const getRandomProjects = () => {
        const allProjects = [];
        Object.values(serviceRoutes).forEach(service => {
            const randomProject = service.projects[Math.floor(Math.random() * service.projects.length)];
            allProjects.push({
                ...randomProject,
                category: service.title
            });
        });
        return allProjects;
    };

    const personalSkills = [
        "Positive", "Disciplined", "Consistent", "Transparent", "Team Player",
        "Critical Thinker", "Analytical Thinker", "Attention to Detail",
        "Problem Solver", "Confident", "Updated with Trends", "Modern",
        "Professional", "Tech Oriented", "Passionate", "Realistic"
    ];


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

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-white py-8 sm:py-16">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="text-left">
                            <div className="mb-3 sm:mb-4">
                                <div className="bg-gray-100 inline-block px-3 sm:px-4 py-2 rounded-lg">
                                    <strong className="text-black text-sm sm:text-base">
                                        WELCOME TO MY PORTFOLIO
                                    </strong>
                                </div>
                            </div>

                            <div className="mb-4 sm:mb-6">
                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Turning Vision Into Reality
                                </h1>
                            </div>


                            <div className="mb-6 sm:mb-8">
                                <p className="text-gray-600 text-base sm:text-lg">
                                    A multidisciplinary professional specializing in Graphic Design,
                                    Full-Stack Development, and Virtual Assistance. I transform ideas
                                    into impactful solutions that drive success.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <Link
                                    to="/development-and-programming"
                                    className="bg-[#03b296] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:opacity-90 transition-all duration-200"
                                >
                                    View Services
                                </Link>
                                <a
                                    href="#featured-projects"
                                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-300 flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-50 transition-all duration-200"
                                >
                                    See My Work
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#03b296] opacity-10 rounded-full"></div>
                                <img
                                    src={Muhammad_Sami}
                                    alt="Muhammad Sami"
                                    className="relative w-full h-full lg:w-96 lg:h-96 rounded-xl shadow-xl border-2 border-[#03b296] "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Skills Section */}
            <section className="py-16 bg-gray-50 text-center">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12 text-center ">
                        Personal Attributes
                    </h2>
                    <div className="flex justify-center">
                        <Marquee gradient={false} speed={50} pauseOnHover loop={0}>
                            {personalSkills.map((skill, index) => (
                                <div key={index} className="bg-white px-6 py-3 mx-4 my-4 rounded-lg shadow-md text-gray-800 text-sm sm:text-base whitespace-nowrap text-center">
                                    {skill}
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            {/* <section id="featured-projects" className="py-16 text-center">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12 text-center ">

                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {getRandomProjects().map((project, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                                <div className="text-sm text-[#03b296] mb-2">{project.category}</div>
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-center">{project.description}</p>
                                <div className="flex flex-wrap justify-center  gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <Projects projects={ProjectsJSON} />

            <ClientsFeedback feedbacks={Clients_Feedback} />
            <Certificates certificates={certificatesData} />
        </div>
    );
};

export default Home;