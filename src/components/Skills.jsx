import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills = ({ skills }) => {
    return (
        <section className="bg-whit py-8 sm:py-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 ">
                    Skills
                </h2>
                <Marquee gradient={false} speed={50} pauseOnHover loop={0} >
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-100 px-6 py-3 mx-4 my-4 rounded-lg shadow-md text-gray-800 text-sm sm:text-base whitespace-nowrap">
                            {skill}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Skills