import React from 'react';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react'; // or use any icon you prefer
import { Link, useLocation } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Muhammad_Sami from '../assets/Muhammad_Sami.png';

// Local fallback image (you can replace this with an actual flag)
const fallbackFlag = 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Globe_icon.svg';

const countryCodes = ['es', 'nl', 'se',
    'no', 'dk', 'fi', 'us', 'ca', 'au', 'gb', 'de', 'fr', 'it', 'ch', 'at', 'be', 'ie', 'pt', 'sg', 'hk',
    'kr', 'tw', 'nz'];

const Header = () => {
    const location = useLocation();
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setShowScrollButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);


    const navigation = [
        // { path: '/development-and-programming', label: 'Development & Programming' },
        // { path: '/graphic-design', label: 'Graphic Design' },
        // { path: '/virtual-assistant', label: 'Virtual Assistant' }
    ];
    // uncomment it to get working things like before. Product eng , va , GD


    return (
        <header className="w-full py-4 sm:py-6 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo Section */}
                    <Link to='/' className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <img
                            src={Muhammad_Sami}
                            alt="Muhammad Sami"
                            className="w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full shadow-lg border-2 border-[#15aef9]"
                        />
                        <div className="flex flex-col text-center sm:text-left">
                            <span className="text-gray-800 font-extrabold text-lg sm:text-2xl lg:text-3xl tracking-wide">
                                Muhammad
                            </span>
                            <span className="text-gray-800 font-extrabold text-lg sm:text-2xl lg:text-3xl tracking-wide">
                                Sami
                            </span>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex justify-center sm:flex-1">
                        <ul className="flex flex-wrap justify-center gap-4 lg:gap-6">
                            {navigation.map((nav) => (
                                <li key={nav.path}>
                                    <Link
                                        to={nav.path}
                                        className={`px-4 py-2 rounded-md transition-all duration-300 text-sm sm:text-base font-medium block text-center 
        ${location.pathname === nav.path
                                                ? 'text-[#15aef9] border-b-2 border-[#15aef9] font-semibold'
                                                : 'text-gray-700 hover:text-[#15aef9] hover:border-b-2 hover:border-[#15aef9]'
                                            }`}
                                    >
                                        {nav.label}
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Hire Now Button */}
                    <div className="w-full sm:w-auto text-center sm:text-right">
                        <a
                            href="#contact"
                            className="bg-[#15aef9] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-[#15adf9e2] transition-all duration-300 font-semibold shadow-md w-full sm:w-auto inline-block">
                            Hire Now
                        </a>
                    </div>
                </div>
                {/* Scrolling Country Flags */}
                <div className="mt-4 w-full  py-3">
                    <h2 className="text-center text-gray-700 font-medium text-xs sm:text-sm mb-4">
                        The client belongs to one of the countries I have worked with.
                    </h2>

                    <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0} className="flex gap-6">
                        {countryCodes.map((code, index) => (
                            <div key={index} className="mx-4 flex items-center space-x-2">
                                <img
                                    src={`https://flagcdn.com/w40/${code}.png`}
                                    alt={code.toUpperCase()}
                                    className="w-10 h-6 sm:w-12 sm:h-8 rounded-sm shadow-md border border-gray-300"
                                    onError={(e) => { e.target.src = fallbackFlag; }} // If CDN fails, use fallback
                                />
                                <span className="text-gray-700 text-sm sm:text-base font-medium uppercase">
                                    {code}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            {showScrollButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-[#15aef9] hover:bg-[#15adf9e2] text-white transition-opacity duration-300"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
            )}
        </header>
    );
};

export default Header;
