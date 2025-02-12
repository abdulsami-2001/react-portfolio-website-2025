import React from 'react'

const Projects = ({ projects }) => {
    return (
        <section className="bg-white py-8 sm:py-16" id="projects">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
