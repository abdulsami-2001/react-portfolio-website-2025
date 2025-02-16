import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Muhammad_Sami from '../assets/Muhammad_Sami.png';

const Header = () => {
    const location = useLocation();

    const navigation = [
        { path: '/graphic-design', label: 'Graphic Design' },
        { path: '/development-and-programming', label: 'Development And Programming' },
        { path: '/virtual-assistant', label: 'Virtual Assistant' }
    ];

    return (
        <header className="w-full py-6 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <Link to='/' className="sm:col-span-4 flex items-center space-x-3 sm:space-x-4">
                        <img
                            src={Muhammad_Sami}
                            alt="Muhammad Sami"
                            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full  shadow-lg border-2 border-[#03b296]"
                        />
                        <div className="flex flex-col">
                            <span className="text-gray-800 font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide">
                                Muhammad
                            </span>
                            <span className="text-gray-800 font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide">
                                Sami
                            </span>
                        </div>
                    </Link>

                    <nav className="sm:col-span-5">
                        <ul className="flex flex-wrap justify-center gap-4">
                            {navigation.map((nav) => (
                                <li key={nav.path}>
                                    <Link
                                        to={nav.path}
                                        className={`text-sm sm:text-base ${location.pathname === nav.path
                                            ? 'text-[#03b296] font-medium'
                                            : 'text-gray-600 hover:text-[#03b296]'
                                            }`}
                                    >
                                        {nav.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="sm:col-span-3 flex justify-center sm:justify-end">
                        <a
                            href="#contact"
                            className="bg-[#03b296] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:opacity-90 transition-all duration-200 whitespace-nowrap font-medium shadow-sm w-full sm:w-auto text-center">Hire Now</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;