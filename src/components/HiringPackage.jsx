import React from 'react'

const HiringPackage = () => {
    const BasicPlan = 2000
    const StandardPlan = 6000
    const PremiumPlan = 10000

    return (
        <section className="bg-white py-8 sm:py-16" id="pricing">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-12">Hiring Plans</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Basic Plan */}
                        <div className="rounded-lg border border-gray-300 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-[#15aef9] flex flex-col">
                            <div className="p-6 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-gray-900">Basic Plan</h3>
                                <div className="mt-4 flex items-baseline justify-center">
                                    <span className="text-4xl font-bold text-[#15aef9]">${BasicPlan}</span>
                                    <span className="ml-1 text-gray-600">/month</span>
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex-grow">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">8 hours/day</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">Monday to Friday</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">NDA Agreement</span>
                                </div>
                            </div>

                            <div className="px-6 pb-6 mt-auto">
                                <a
                                    href="#contact"
                                    className="block w-full bg-[#15aef9] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 text-center"
                                >
                                    Hire Now
                                </a>
                            </div>
                        </div>

                        {/* Standard Plan */}
                        <div className="rounded-lg border border-[#15aef9] overflow-hidden transition-all duration-200 hover:shadow-lg relative flex flex-col">
                            <div className="absolute top-0 right-0 bg-[#15aef9] text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                                Popular
                            </div>

                            <div className="p-6 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-gray-900">Standard Plan</h3>
                                <div className="mt-4 flex items-baseline justify-center">
                                    <span className="text-4xl font-bold text-[#15aef9]">${StandardPlan - 300}</span>
                                    <span className="ml-1 text-gray-600">/3 months</span>
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex-grow">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">8 hours/day</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">Monday to Friday</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">NDA Agreement</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">Saving ${StandardPlan - 5700}</span>
                                </div>
                            </div>

                            <div className="px-6 pb-6 mt-auto">
                                <a
                                    href="#contact"
                                    className="block w-full bg-[#15aef9] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 text-center"
                                >
                                    Hire Now
                                </a>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="rounded-lg border border-gray-300 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-[#15aef9] flex flex-col">
                            <div className="p-6 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-gray-900">Premium Plan</h3>
                                <div className="mt-4 flex items-baseline justify-center">
                                    <span className="text-4xl font-bold text-[#15aef9]">${PremiumPlan}</span>
                                    <span className="ml-1 text-gray-600">/5 months</span>
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex-grow">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">8 hours/day</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">Monday to Friday</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">NDA Agreement</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-[#15aef9]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-3 text-gray-600">Work on your time zone</span>
                                </div>
                            </div>

                            <div className="px-6 pb-6 mt-auto">
                                <a
                                    href="#contact"
                                    className="block w-full bg-[#15aef9] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 text-center"
                                >
                                    Hire Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Cost Savings Section - Now placed after the plans */}
                    <div className="mt-12 bg-white rounded-lg p-6 border border-[#15aef9]">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Benefits of Remote Hiring</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-[#15aef9] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-gray-700 font-medium"><strong>No Office Expenses</strong> – No need to provide a desk, equipment, or utilities.</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-[#15aef9] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-gray-700 font-medium"><strong>No Commuting Costs</strong> – No need to cover transport or travel allowances.</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-[#15aef9] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-gray-700 font-medium"><strong>Fewer Sick Leaves</strong> – Remote employees face less exposure to illnesses.</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-[#15aef9] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-gray-700 font-medium"><strong>No Insurance Liabilities</strong> – No workplace accident risks or compensation claims.</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-[#15aef9] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-gray-700 font-medium"><strong>No Utility Costs</strong> – No electricity, water, or internet expenses.</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-[#15aef9] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-3 text-gray-700 font-medium"><strong>Continuous Work</strong> – Can work across different time zones if needed.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HiringPackage