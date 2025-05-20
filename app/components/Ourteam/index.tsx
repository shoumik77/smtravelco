"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const CollegeFormals = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: 'location',
            title: 'Location',
            content: 'From Miami beaches to Nashville music venues, we help you find the perfect formal location that fits your group size, budget, and vibe. Popular destinations include Las Vegas, Key West, Nashville, New Orleans, and many more.'
        },
        {
            id: 'people',
            title: 'People',
            content: 'Whether you\'re planning for 20 people or 200+, we handle group coordination, room assignments, transportation logistics, and ensure everyone has an amazing time together.'
        },
        {
            id: 'customization',
            title: 'Customization',
            content: 'Every formal is unique. We customize everything from dinner reservations to exclusive venue rentals, themed parties, and special activities that match your organization\'s style and traditions.'
        },
        {
            id: 'price',
            title: 'Price',
            content: 'We work with any budget to create an unforgettable experience. Our team negotiates group rates for accommodations, activities, and dining to give you the best value for your investment.'
        }
    ];

    return (
        <div id="manage-section" className="w-full bg-[#f4f1eb] py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Image */}
                    <div className="relative h-96 lg:h-[500px]">
                        <Image 
                            src="https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744753068401-39K4C4B32L7AJMA0C3DJ/unsplash-image-w423NnHFjFg.jpg?format=1500w" 
                            alt="College formal party with confetti and dancing"
                            fill
                            className="object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#5e2b0c] mb-16">
                            We Book College Formals
                        </h1>

                        <div className="space-y-8">
                            {sections.map((section) => (
                                <div key={section.id} className="border-b border-gray-300 pb-6">
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="flex justify-between items-center w-full text-left py-2 hover:text-[#5e2b0c] transition-colors"
                                    >
                                        <h3 className="text-2xl lg:text-3xl font-medium text-gray-700">
                                            {section.title}
                                        </h3>
                                        <div className="ml-4 p-2">
                                            {openSection === section.id ? (
                                                <ChevronUpIcon className="h-7 w-7 text-[#5e2b0c]" />
                                            ) : (
                                                <ChevronDownIcon className="h-7 w-7 text-gray-500" />
                                            )}
                                        </div>
                                    </button>
                                    
                                    {openSection === section.id && (
                                        <div className="mt-6 pl-4 pr-12 animate-in slide-in-from-top-2 duration-200">
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <Link href="#footer-section">
                                <button className="bg-[#5e2b0c] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#7a3910] hover:shadow-xl transition-all duration-300">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeFormals;