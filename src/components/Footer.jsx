import React from 'react';
import { Mail, Phone, Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex flex-col items-center">
                        <p className="text-gray-800 font-medium text-sm sm:text-base flex items-center">
                            <Mail className="w-5 h-5 mr-2 text-[#03b296]" />
                            <a href="mailto:muhammadsami.workspace@gmail.com" target="_blank" className="text-[#03b296] hover:underline">
                                muhammadsami.workspace@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-800 font-medium text-sm sm:text-base flex items-center mt-2">
                            <Phone className="w-5 h-5 mr-2 text-[#03b296]" />
                            <a href="https://wa.me/923312847546" className="text-[#03b296] hover:underline" target="_blank" rel="noopener noreferrer">
                                +92 331 2847546
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-800 font-medium text-sm sm:text-base flex items-center">
                            <Briefcase className="w-5 h-5 mr-2 text-[#03b296]" />
                            <a href="https://www.upwork.com/freelancers/~0160649c08694ce31b" target="_blank" className="text-[#03b296] hover:underline">
                                Upwork Profile
                            </a>
                        </p>
                        <p className="text-gray-800 font-medium text-sm sm:text-base flex items-center mt-2">
                            <Briefcase className="w-5 h-5 mr-2 text-[#03b296]" />
                            <a href="https://www.fiverr.com/abdulsamisam" target="_blank" className="text-[#03b296] hover:underline">
                                Fiverr Profile
                            </a>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm sm:text-base">&copy; {new Date().getFullYear()} Muhammad Sami. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
