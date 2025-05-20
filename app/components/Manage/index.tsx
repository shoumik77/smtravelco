"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const teamMembers = [
    {
        name: "Noah McNamara",
        role: "Finance, Operations & Legal",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/0bd7a625-af91-4f1a-a115-ab67157264a3/IMG_5619.jpeg?format=2500w",
        bio: "I am currently a junior at Virginia Tech University, studying Finance and Real Estate. I have developed a strong understanding of business principles. With this knowledge, I focus on ensuring seamless experiences for our customers through SM Travel Company. I’ve planned both domestic and international trips with the goal of saving time and money. At SM Travel Company, our mission is to reduce stress and provide cost-effective solutions, making travel planning easier and more affordable for you.",
        expertise: ["Financial Planning", "Operations Management", "Legal Compliance", "Risk Assessment"]
    },
    {
        name: "Logan Stein",
        role: "Marketing, Branding & Client Outreach",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/5e65526c-05b1-46c7-8908-ef517718509c/IMG_5621.jpeg?format=2500w",
        bio: "I am currently a junior at James Madison University, I have served as the social chair for my fraternity for two years. In this role, I have successfully organized over 25 trips, including four large formals attended by more than 100 people. My experience highlights strong leadership and event-planning skills, as well as a commitment to creating memorable experiences for my fraternity, family, and friends.",
        expertise: ["Digital Marketing", "Brand Strategy", "Client Relations", "Social Media Management"]
    }
];

const MeetTheTeam = () => {
    const [openMember, setOpenMember] = useState<string | null>(null);

    const toggleMember = (memberName: string) => {
        setOpenMember(openMember === memberName ? null : memberName);
    };

    return (
        <div id="team-section" className="bg-[#f4f1eb] py-24">
            <div className='mx-auto max-w-7xl px-4 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className='text-4xl lg:text-6xl font-bold text-[#5e2b0c] mb-8'>
                        Meet the Team
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        At <strong className="text-[#5e2b0c]">SM Travel Company</strong>, we're dedicated to making travel seamless, stress-free, and unforgettable. Here's who makes it happen:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className="space-y-6">
                            {/* Team Member Image */}
                            <div className="relative h-[500px] w-full max-w-xs mx-auto">
                                <Image 
                                    src={member.imageUrl} 
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-2xl shadow-xl object-center"
                                />
                            </div>

                            {/* Team Member Info with Dropdown */}
                            <div className="space-y-4">
                                <button
                                    onClick={() => toggleMember(member.name)}
                                    className="w-full border-b-2 border-gray-400 pb-4 flex justify-between items-center group hover:border-[#5e2b0c] transition-colors"
                                >
                                    <div className="text-left">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-[#5e2b0c] transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-lg text-gray-600 mt-1">
                                            {member.role}
                                        </p>
                                    </div>
                                    <div className="ml-4">
                                        {openMember === member.name ? (
                                            <ChevronUpIcon className="h-8 w-8 text-[#5e2b0c]" />
                                        ) : (
                                            <ChevronDownIcon className="h-8 w-8 text-gray-500" />
                                        )}
                                    </div>
                                </button>

                                {/* Dropdown Content */}
                                {openMember === member.name && (
                                    <div className="animate-in slide-in-from-top-2 duration-300 space-y-4 pt-4">
                                        <p className="text-gray-700 leading-relaxed">
                                            {member.bio}
                                        </p>
                                        <div>
                                            <h4 className="font-semibold text-[#5e2b0c] mb-2">Areas of Expertise:</h4>
                                            <ul className="grid grid-cols-2 gap-2">
                                                {member.expertise.map((skill, skillIndex) => (
                                                    <li key={skillIndex} className="flex items-center text-gray-600">
                                                        <span className="w-2 h-2 bg-[#5e2b0c] rounded-full mr-2"></span>
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <p className="text-lg text-gray-700 mb-8">
                        Ready to start planning your next adventure? Our team is here to help.
                    </p>
                    <Link href="#footer-section">
                        <button className="bg-[#5e2b0c] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#7a3910] hover:shadow-xl transition-all duration-300">
                            Contact Us Today
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MeetTheTeam;