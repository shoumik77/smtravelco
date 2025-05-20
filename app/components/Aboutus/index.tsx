import Image from "next/image";

const Aboutus = () => {
    return (
        <div id="aboutus-section" className="py-24 bg-[#f4f1eb]">
            <div className='mx-auto max-w-7xl px-4 lg:px-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
                    {/* Left side - Content */}
                    <div className='space-y-6'>
                        <h2 className='text-4xl lg:text-5xl font-bold text-[#5e2b0c] mb-8'>
                            About Our Company
                        </h2>
                        
                        <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
                            <p>
                                <strong className="text-[#5e2b0c]">SM Travel Company is here to make planning your next trip simple, affordable, and stress-free.</strong> Whether it's a weekend getaway, a spring or fall break trip, or a college formal, we build custom trips around your goals, budget, and schedule.
                            </p>
                            
                            <ul className='space-y-3 ml-6'>
                                <li className='flex items-start'>
                                    <span className='text-[#5e2b0c] mr-3'>•</span>
                                    <span>Personalized itineraries that make the most of your time</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-[#5e2b0c] mr-3'>•</span>
                                    <span>Access to exclusive travel deals and group rates</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-[#5e2b0c] mr-3'>•</span>
                                    <span>Always free consultations and quotes for any trip</span>
                                </li>
                            </ul>
                            
                            <p>
                                From <strong className="text-[#5e2b0c]">booking flights</strong> and stays to <strong className="text-[#5e2b0c]">coordinating every detail</strong>, we handle it all—so you can focus on the experience. <strong className="text-[#5e2b0c]">Our promise is simple: we'll help you save time, save money, or travel smarter—for every trip.</strong>
                            </p>
                        </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className='flex justify-center lg:justify-end'>
                        <div className='relative w-full max-w-lg'>
                            <Image 
                                src="https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744145611038-OXZ35ADYNCNAIUQDRBFC/unsplash-image-Nukqi6L_5DU.jpg?format=1500w" 
                                alt="Travel planning team" 
                                width={500} 
                                height={600}
                                className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;