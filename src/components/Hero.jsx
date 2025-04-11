import React from 'react';
import Lottie from 'lottie-react';
import Graphic_Design from '../assets/Graphic_Design.json'
import Development_and_Programming from '../assets/Development_Programming.json'
import Virtual_Assistant from '../assets/Virtual_Assistant.json'

const Hero = ({ title, heading, description, animation }) => {
    // Import all animations
    const animations = {
        Graphic_Design: Graphic_Design,
        Development_and_Programming: Development_and_Programming,
        Virtual_Assistant: Virtual_Assistant
    };

    return (
        <section className="bg-white py-8 sm:py-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-left">
                        <div className="mb-3 sm:mb-4">
                            <div className="bg-gray-100 inline-block px-3 sm:px-4 py-2 rounded-lg">
                                <strong className="text-black text-sm sm:text-base">{title}</strong>
                            </div>
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {heading}
                            </h1>
                        </div>

                        <div className="mb-6 sm:mb-8">
                            <p className="text-gray-600 text-base sm:text-lg">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                            <a
                                href="#projects"
                                className="bg-[#15aef9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:opacity-90 transition-all duration-200"
                            >
                                <span>View My Projects</span>
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
                        <div className="w-full max-w-lg">
                            <Lottie
                                animationData={animations[animation]}
                                loop={true}
                                autoplay={true}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;