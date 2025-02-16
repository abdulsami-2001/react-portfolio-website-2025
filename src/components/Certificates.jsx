import React from 'react';
import Marquee from 'react-fast-marquee';

const Certificates = ({ certificates }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
                {/* <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"> */}
                
                    Certificates
                </h2>
                <Marquee gradient={false} speed={50} pauseOnHover loop={0}>
                    {certificates.map((certificate, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 mx-4 md:mx-16  my-4 rounded-lg shadow-md w-80 h-[500px] flex flex-col justify-between"
                        >
                            <div className="mb-4 h-full overflow-hidden rounded-md flex items-center justify-center bg-gray-100">
                                <img
                                    src={certificate.image}
                                    alt={certificate.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                                    {certificate.name}
                                </h3>
                                <p className="text-sm text-gray-600 text-justify">
                                    {certificate.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Certificates;
