// Header.jsx
import React from 'react';
import Muhammad_Sami from '../assets/Muhammad_Sami.png';

const Header = () => {
    return (
        <header className="w-full py-3 bg-white shadow-sm top-0">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-6 flex items-center space-x-3 sm:space-x-4">
                        <img
                            src={Muhammad_Sami}
                            alt="Muhammad Sami"
                            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg border-2 border-[#399c47]"
                        />
                        <div className="flex flex-col">
                            <span className="text-gray-800 font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide">
                                Muhammad
                            </span>
                            <span className="text-gray-800 font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide">
                                Sami
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-6 flex justify-center sm:justify-end">
                        <button className="bg-[#399c47] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:opacity-90 transition-all duration-200 whitespace-nowrap font-medium shadow-sm w-full sm:w-auto text-center">
                            Hire Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
