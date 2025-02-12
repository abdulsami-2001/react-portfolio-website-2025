import React from 'react';
import Muhammad_Sami_Full from '../assets/Muhammad_Sami_Full.png'
// import Muhammad_Sami_Full from '../assets/Muhammad_Sami_Full.jpg'

const HeroSection = () => {
    return (
        <section className="bg-white py-8 sm:py-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-left">
                        <div className="mb-3 sm:mb-4">
                            <div className="bg-gray-100 inline-block px-3 sm:px-4 py-2 rounded-lg">
                                <strong className="text-black text-sm sm:text-base">VISIONARY GRAPHIC DESIGNER</strong>
                            </div>
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Designing Experiences That Inspire
                            </h1>
                        </div>

                        <div className="mb-6 sm:mb-8">
                            <p className="text-gray-600 text-base sm:text-lg">
                                I specialize in creating visually stunning, user-centered designs that make a lasting impact. From branding to interactive UI/UX design, let's bring your ideas to life with creativity and innovation.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                            <a
                                href="#projects"
                                className="bg-[#399c47] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:opacity-90 transition-all duration-200"
                            >
                                <span>View My Work</span>
                            </a>
                            <a
                                href="#contact"
                                className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-300 flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-50 transition-all duration-200"
                            >
                                Get in Touch
                            </a>
                        </div>

                        {/* <div className="flex items-center gap-3 sm:gap-4">
                            <img
                                src="/path/to/your/image.png"
                                alt="Avatar Group"
                                className="w-20 sm:w-24"
                            />
                            <p className="text-gray-600 text-sm sm:text-base">Trusted by 50+ clients worldwide.</p>
                        </div> */}
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={Muhammad_Sami_Full}
                            alt="Hero Image"
                            className="w-full max-w-lg rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection  