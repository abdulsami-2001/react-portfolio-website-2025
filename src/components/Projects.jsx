import React from 'react';

const Projects = ({ projects }) => {
    return (
        <section className="bg-white py-8 sm:py-16 text-center" id="projects">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects?.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center space-y-4"
                        >
                            {/* Project Image (if available) */}
                            {project?.image && (
                                <img
                                    src={project.image}
                                    alt={project?.name || "Project Image"}
                                    // className="w-full h-48 object-cover rounded-lg"
                                />
                            )}
                            
                            {/* Project Name */}
                            <h3 className="text-xl font-semibold text-gray-900">
                                {project?.name || "Unnamed Project"}
                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-600">
                                {project?.description || "No description available."}
                            </p>

                            {/* Technologies Used */}
                            {project?.technologies?.length > 0 && (
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {project.technologies.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Project Links */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                {project?.links?.primary && (
                                    <a
                                        href={project.links.primary}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#15aef9] text-white px-6 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto hover:opacity-90 transition-all duration-200"
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
