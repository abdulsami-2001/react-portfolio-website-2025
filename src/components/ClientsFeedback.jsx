import React from 'react';
import Marquee from 'react-fast-marquee';

const ClientsFeedback = ({ feedbacks }) => {
    return (
        <section className="py-16 bg-[#15aef9]">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24 text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                    Clients Feedback
                </h2>
                <Marquee gradient={false} speed={50} pauseOnHover loop={0}>
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="w-80 mx-4 md:mx-8 my-4 p-6 shadow-lg rounded-lg bg-white border border-gray-200 flex flex-col justify-between h-full">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {feedback.clientName}
                                </h3>
                                <p className="text-sm text-gray-600">{feedback.clientCountry}</p>
                                <div className="flex justify-center items-center gap-1 text-yellow-500 my-2">
                                    {Array.from({ length: feedback.clientRating }).map((_, i) => (
                                        <span key={i}>&#9733;</span> // Unicode star symbol
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 italic">"{feedback.clientFeedback}"</p>
                            </div>
                            {/* <div className="text-xs text-gray-500 text-center mt-4">
                                {feedback.clientFeedbackTime} - {feedback.clientServiceLabel.replace(/_/g, ' ')}
                            </div> */}
                            {/* uncomment it to get working things like before. Product eng , va , GD */}

                            {feedback.clientFeedbackLink && (
                                <div className="mt-4 text-center">
                                    <a
                                        href={feedback.clientFeedbackLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-white text-[#15aef9] text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        View Feedback
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default ClientsFeedback;
