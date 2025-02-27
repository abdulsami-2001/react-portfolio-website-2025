import { Briefcase, SchoolIcon, StarIcon, } from 'lucide-react';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const WorkExperienceandEducation = () => {
    return (

        <section className="bg-white py-8 sm:py-16 border-t border-gray-200" id="contact">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold  text-gray-900 mb-12">Work Experience and Education</h1>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2024 - Present"
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        contentStyle={{ background: "#fff", borderRight: "4px solid #03b296", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "20px" }}
                        contentArrowStyle={{ borderRight: "7px solid #03b296" }}
                        icon={<Briefcase />}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Service Provider</h3>
                        <h4 className="text-md sm:text-lg text-gray-600">Upwork</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Remote · Freelance</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="April 2024 - Present"
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        contentStyle={{ background: "#fff", borderLeft: "4px solid #03b296", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "20px" }}
                        contentArrowStyle={{ borderRight: "7px solid #03b296" }}
                        icon={<Briefcase />}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Service Provider</h3>
                        <h4 className="text-md sm:text-lg text-gray-600">Fiverr</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Remote · Freelance</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2023 - September 2024"
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        contentStyle={{ background: "#fff", borderRight: "4px solid #03b296", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "20px" }}
                        contentArrowStyle={{ borderRight: "7px solid #03b296" }}
                        icon={<Briefcase />}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">React Native Internship</h3>
                        <h4 className="text-md sm:text-lg text-gray-600">VentureDive</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Onsite · Full time · Mobile App Development, React Native</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October 2020 - September 2024"
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        contentStyle={{ background: "#fff", borderLeft: "4px solid #03b296", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "20px" }}
                        contentArrowStyle={{ borderRight: "7px solid #03b296" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                        <h4 className="text-md sm:text-lg text-gray-600">Indus University</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Onsite · Bachelor Degree · Computer Science</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October 2023 - January 2024"
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        contentStyle={{ background: "#fff", borderRight: "4px solid #03b296", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "20px" }}
                        contentArrowStyle={{ borderRight: "7px solid #03b296" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Mobile App Development</h3>
                        <h4 className="text-md sm:text-lg text-gray-600">Hazza Institute of Technology</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Onsite · Short Course · React Native</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2019 - January 2020"
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        contentStyle={{ background: "#fff", borderLeft: "4px solid #03b296", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "20px" }}
                        contentArrowStyle={{ borderRight: "7px solid #03b296" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Mobile and Web Development</h3>
                        <h4 className="text-md sm:text-lg text-gray-600">Axiom</h4>
                        <p className="text-gray-700 text-sm sm:text-base">Onsite · Short Course · Html , CSS , Javascript , ES6 , React , Firebase , Tailwind CSS , React Native , MongoDB , ExpressJS and NodeJS</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: "#03b296", color: "#fff", boxShadow: "0 0 10px rgba(3, 178, 150, 0.5)" }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        </section>

    )
}

export default WorkExperienceandEducation