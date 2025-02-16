import React from 'react';

const Projects = ({ projects }) => {
    return (
        <section className="bg-white py-8 sm:py-16 text-center" id="projects">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects?.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between h-full text-center"
                        >
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                                    {project?.name || "Unnamed Project"}
                                </h3>
                                <p className="text-gray-600 mb-4 text-justify">
                                    {project?.description || "No description available."}
                                </p>
                                {project?.technologies?.length > 0 && (
                                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                                        {project?.technologies.map((tech, i) => (
                                            <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Centering the buttons properly */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full justify-center">
                                {project?.links?.primary && (
                                    <a
                                        href={project.links.primary}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#03b296] text-white px-6 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto hover:opacity-90 transition-all duration-200"
                                    >
                                        View Project
                                    </a>
                                )}
                                {project?.links?.secondary && (
                                    <a
                                        href={project.links.secondary}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 flex items-center justify-center w-full sm:w-auto hover:bg-gray-50 transition-all duration-200"
                                    >
                                        Secondary Link
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
