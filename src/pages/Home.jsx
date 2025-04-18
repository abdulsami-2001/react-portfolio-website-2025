// Home.jsx
import React from 'react';
import Muhammad_Sami from '../assets/Muhammad_Sami.png';
import Marquee from 'react-fast-marquee';
import Clients_Feedback from '../assets/Clients_Feedback.json';
import ClientsFeedback from '../components/ClientsFeedback';
import Projects from '../components/Projects';
import ProjectsJSON from '../assets/Projects.json'
import Highlights from '../components/Highlights';
import Skills from '../components/Skills';
import HiringPackage from '../components/HiringPackage';

const Home = () => {

    // const filteredPorjects = [
    //     {
    //         "name": "Fan Sounds for Sleep",
    //         "description": "Developed an app for improved sleep and concentration.",
    //         "technologies": [
    //             "Git",
    //             "React Native",
    //             "React",
    //             "JavaScript",
    //             "Firebase",
    //             "FB Ads",
    //             "FB SDK Next",
    //             "Google Admob SDK",
    //             "React Native Navigation"
    //         ],
    //         "label": "Development_and_Programming",
    //         "links": {
    //             "primary": "https://play.google.com/store/apps/details?id=com.bednapfansound",
    //             "secondary": "https://drive.google.com/file/d/1L7hX36FOB8a_JoxV9WkGCXqNznjNiLCt/view"
    //         },
    //         "image": "/fansounds.png"
    //     },
    //     {
    //         "name": "Restaurant Landing Page",
    //         "description": "Developed a React Application which is a restaurant landing page website.",
    //         "technologies": [
    //             "React",
    //             "JavaScript",
    //             "Git",
    //             "GitHub",
    //             "Babel",
    //             "Webpack"
    //         ],
    //         "label": "Development_and_Programming",
    //         "links": {
    //             "primary": "https://react-restaurant-landing-page-by-sami.netlify.app"
    //         },
    //         "image": "/restaurant.png"
    //     },
    //     {
    //         "name": "QR Code and Barcode Scanner",
    //         "description": "Developed an app that allows users to scan and generate QR codes and barcodes.",
    //         "technologies": [
    //             "React Native",
    //             "React Native Navigation",
    //             "React",
    //             "JavaScript",
    //             "Firebase",
    //             "Firebase Database",
    //             "Git",
    //             "GitHub",
    //             "Google Admob SDK",
    //             "Facebook SDK",
    //             "fbsdk-next"
    //         ],
    //         "label": "Development_and_Programming",
    //         "links": {
    //             "primary": "https://play.google.com/store/apps/details?id=com.qr.and.barcode.scanner.usa",
    //             "secondary": "https://drive.google.com/file/d/1GcmbnXslqY6PeZqIHUO-lPkfKG3jUg3o/view?usp=sharing"
    //         },
    //         "image": "/qrcode.png"
    //     },
    //     {
    //         "name": "Instagram Advertisment Post",
    //         "description": "Created instagram advertisment post while staying true to their brand guidelines.",
    //         "technologies": [
    //             "Canva",
    //             "Instagram",
    //             "Poster Design",
    //             "Graphic Design",
    //             "Brand Guidelines"
    //         ],
    //         "label": "Graphic_Design",
    //         "links": {
    //             "primary": "https://www.behance.net/gallery/219469257/Social-Media-Content-Creator-Ads-Expert"
    //         },
    //         "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4ffd1219469257.67b6eff6139d1.png"
    //     },
    //     {
    //         "name": "YouTube Thumbnail Specialist 🎯🎥",
    //         "description": "Designing eye-catching and clickable YouTube thumbnails that not only captured attention but also sparked curiosity, driving viewers to click and watch.",
    //         "technologies": [
    //             "Canva",
    //             "Youtube",
    //             "brand identity",
    //             "Adobe Photoshop",
    //             "Brand Guidelines",
    //             "Graphic Designer",
    //             "Youtube Thumbnail"
    //         ],
    //         "label": "Graphic_Design",
    //         "links": {
    //             "primary": "https://www.behance.net/gallery/219424023/YouTube-Thumbnail-Specialist-"
    //         },
    //         "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/191950219424023.67b6010d24087.png"
    //     },
    //     {
    //         "name": "Graphic Designer for Social Media (LinkedIn) Posts and Short Videos",
    //         "description": "Created eye-catching designs and short videos while staying true to their brand guidelines.",
    //         "technologies": [
    //             "Canva",
    //             "LinkedIn",
    //             "Poster Design",
    //             "Graphic Design",
    //             "Brand Guidelines"
    //         ],
    //         "label": "Graphic_Design",
    //         "links": {
    //             "primary": "https://www.behance.net/gallery/218382733/Social-Media-Webinar-Ad-Posts-and-Short-Video"
    //         },
    //         "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/035c91218382733.67b6044255c9d.png"
    //     },
    // ]


    // uncomment it to get working things like before. Product eng , va , GD



    const personalSkills = [
        "Positive", "Disciplined", "Consistent", "Transparency", "Team Player",
        "Critical Thinker", "Analytical Thinker", "Attention to Detail", "Quick Learner",
        "Problem Solver", "Leadership", "Management", "Productive", "AI Player", "Confident", "Updated with Trends", "Modern",
        "Professional", "Tech Oriented", "Passionate", "Realistic"
    ];

    const skills = [
        "Front End Engineer",
        "HTML",
        "CSS",
        "JavaScript",
        "Advance JavaScript ES6",
        "Tailwind CSS",
        "Shadcn UI",
        "Firebase",
        "React js",
        "React Native",
        "Expo",
        "Next js",
        "Redux",
        'Context API',
        "Readux Sauce",
        "Firebase Realtime Database",
        "Firebase Cloudstore Database",
        "Firebase Auth",
        "JSON",
        "REST APIs",
        "Git",
        "GitHub",
        "Redux",
        "Java",
        "Python",
        "SQL",
        "No SQL",
        "Agile",
        "Software Engineering",
        "Mobile App Development",
        "Web Development",
        "Software Developer",
        "Front End Developer",
        "Responsive Developemnt",
        "Android App Development",
        "Unit Testing",
        "Computer Science",
        "Programming",
    ]

    // Filter porjects based on the selected path
    const filteredPorjects = ProjectsJSON.filter(
        (porject) => porject.label === 'Development_and_Programming'
    );

    // comment it to get working things like before. Product eng , va , GD


    // Filter reviews based on the selected path
    const filteredReviews = Clients_Feedback.filter(
        (review) => review.clientServiceLabel === 'Development_and_Programming'
    );


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
                                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    {/* Excellence in Product Engineering, Design & Development */}
                                    {/* uncomment it to ge◘t working things like before. Product eng , va , GD */}

                                    Software Engineer with a Business Mindset
                                </h1>
                            </div>


                            <div className="mb-6 sm:mb-8">
                                {/* <p className="text-gray-600 text-justify sm:text-lg">
                                    A passionate Computer Science graduate specializing in product engineering, design, and development. With a solid foundation in modern technology, I excels at solving complex problems and crafting innovative solutions.

                                </p> */}
                                {/* uncomment it to ge◘t working things like before. Product eng , va , GD */}

                                <p className="text-gray-600 text-justify sm:text-lg">
                                    {/* A passionate Computer Science graduate specializing in product engineering, design, and development. With a solid foundation in modern technology, I excels at solving complex problems and crafting innovative solutions. */}
                                    {/* uncomment it to ge◘t working things like before. Product eng , va , GD */}

                                    A passionate Computer Science graduate specializing in Software Engineering. With a strong understanding of business, I code to create solutions that help businesses grow. With a solid foundation in modern technology, I excel at solving complex problems and developing innovative solutions.
                                </p>

                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <a
                                    href="#projects"
                                    className="bg-[#15aef9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:opacity-90 transition-all duration-200"
                                >
                                    View My Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-300 flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-50 transition-all duration-200"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#15aef9] opacity-10 rounded-full"></div>
                                <img
                                    src={Muhammad_Sami}
                                    alt="Muhammad Sami"
                                    className="relative w-full h-full lg:w-96 lg:h-96  rounded-xl shadow-xl border-2 border-[#15aef9] "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Skills skills={skills} />

            <Projects projects={filteredPorjects} />

            {/* <Projects projects={filteredPorjects} /> */}
            {/* uncomment it to get working things like before. Product eng , va , GD */}

            <ClientsFeedback feedbacks={filteredReviews} />
            {/* <Highlights /> */}
            {/* uncomment it to get working things like before. Product eng , va , GD */}

            <HiringPackage />

            {/* Personal Skills Section */}
            <section className="py-16 bg-gray-50 text-center">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12 text-center ">
                        Personal Attributes
                    </h2>
                    <div className="flex justify-center">
                        <Marquee gradient={false} speed={50} pauseOnHover loop={0}>
                            {personalSkills.map((skill, index) => (
                                <div key={index} className="bg-white px-6 py-3 mx-3 my-4 rounded-lg shadow-md text-gray-800 text-sm sm:text-base whitespace-nowrap text-center">
                                    {skill}
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;