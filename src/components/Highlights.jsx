import React from 'react'
import Muhammad_Sami from '../assets/Muhammad_Sami.png'

const Highlights = () => {
    return (
        <section className="bg-white py-8 sm:py-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* <!-- Image on the Left --> */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#03b296] opacity-10 rounded-full"></div>
                            <img
                                alt="Muhammad Sami"
                                className="relative w-full h-full lg:w-96 lg:h-96 rounded-xl shadow-xl border-2 border-[#03b296]"
                                src={Muhammad_Sami}
                            />
                        </div>
                    </div>

                    {/* <!-- Right Aligned Text --> */}
                    <div className="text-right">
                        <div className="mb-3 sm:mb-4">
                            <div className="bg-gray-100 inline-block px-3 sm:px-4 py-2 rounded-lg">
                                <strong className="text-black text-sm sm:text-base">MY EXPERIENCE</strong>
                            </div>
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                100+ Projects Delivered
                            </h1>
                        </div>

                        <div className="mb-6 sm:mb-8">
                            <p className="text-gray-600 text-base sm:text-lg">
                                With expertise in Graphic Design, Development, Programming, Virtual Assistance, and Digital Solutions, I have successfully completed over 100 projects for clients across the globe. </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-end">
                            <a href="#projects" className="bg-[#03b296] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:opacity-90 transition-all duration-200" >
                                View My Projects
                            </a>
                            <a href="#contact" className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-300 flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-50 transition-all duration-200">
                                Get in Touch
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Highlights
