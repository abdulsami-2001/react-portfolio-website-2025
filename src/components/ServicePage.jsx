import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import ClientsFeedback from './ClientsFeedback';
import Clients_Feedback from '../assets/Clients_Feedback.json';
import ProjectsJSON from '../assets/Projects.json';
import Highlights from './Highlights';


const ServicePage = ({ title, heading, description, skills, projects, animation, path }) => {
    // Map paths to service labels
    const pathMapping = {
        "graphic-design": "Graphic_Design",
        "development-and-programming": "Development_and_Programming",
        "virtual-assistant": "Virtual_Assistant"
    };

    // Filter reviews based on the selected path
    const filteredReviews = Clients_Feedback.filter(
        (review) => review.clientServiceLabel === pathMapping[path]
    );

    // Filter porjects based on the selected path
    const filteredPorjects = ProjectsJSON.filter(
        (porject) => porject.label === pathMapping[path]
    );

    return (
        <>
            <Hero
                title={title}
                heading={heading}
                description={description}
                animation={animation}
            />
            <Skills skills={skills} />
            <Projects projects={filteredPorjects} />
            <ClientsFeedback feedbacks={filteredReviews} />
            <Highlights />


        </>
    );
};

export default ServicePage;