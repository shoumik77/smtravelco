"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    destination: string;
    tripType: string;
    imgSrc: string;
    description: string;
}

const tripData: DataType[] = [
    {
        destination: 'Nashville',
        tripType: 'Music City Experience',
        imgSrc: 'https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744740204403-NJQSO6BUC1Y8OE0MOD97/unsplash-image-AHnmupFDWCc.jpg?format=750w',
        description: 'Live music on Broadway, legendary venues like the Grand Ole Opry, and nonstop nightlife.'
    },
    {
        destination: 'Las Vegas',
        tripType: 'Entertainment Capital',
        imgSrc: 'https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744740420773-92O7FPNN13NTOJ8WZ6R6/unsplash-image-9xjdQ8-zLKI.jpg?format=750w',
        description: 'The dazzling Strip, world-class casinos, and shows you\'ll never forget.'
    },
    {
        destination: 'Key West',
        tripType: 'Island Paradise',
        imgSrc: 'https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744740454862-GJTH5WZDHXTPTE4NKHUA/unsplash-image-oVUmFyST27s.jpg?format=750w',
        description: 'Sun-soaked beaches, famous spots like Mallory Square, and a laid-back island vibe.'
    },
    {
        destination: 'Nashville',
        tripType: 'Music City Experience',
        imgSrc: 'https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744740204403-NJQSO6BUC1Y8OE0MOD97/unsplash-image-AHnmupFDWCc.jpg?format=750w',
        description: 'Live music on Broadway, legendary venues like the Grand Ole Opry, and nonstop nightlife.'
    },
    {
        destination: 'Las Vegas',
        tripType: 'Entertainment Capital',
        imgSrc: 'https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744740420773-92O7FPNN13NTOJ8WZ6R6/unsplash-image-9xjdQ8-zLKI.jpg?format=750w',
        description: 'The dazzling Strip, world-class casinos, and shows you\'ll never forget.'
    },
    {
        destination: 'Key West',
        tripType: 'Island Paradise',
        imgSrc: 'https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/1744740454862-GJTH5WZDHXTPTE4NKHUA/unsplash-image-oVUmFyST27s.jpg?format=750w',
        description: 'Sun-soaked beaches, famous spots like Mallory Square, and a laid-back island vibe.'
    },
]

// CAROUSEL SETTINGS

export default class TripCarousel extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div id="experiences" className="bg-[#f4f1eb] py-32">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl sm:text-6xl font-bold text-[#5e2b0c] my-2">Amazing Travel Experiences</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {tripData.map((trip, i) => (
                        <div key={i} className="px-4">
                            <div className='bg-white mx-2 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
                                <div className='relative h-64 w-full'>
                                    <Image 
                                        src={trip.imgSrc} 
                                        alt={trip.destination}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className='p-6'>
                                    <h4 className='text-2xl font-bold text-[#5e2b0c] mb-2'>{trip.destination}</h4>
                                    <h5 className='text-lg font-semibold text-gray-600 mb-3'>{trip.tripType}</h5>
                                    <p className='text-gray-700 leading-relaxed'>{trip.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Description below slider */}
                <div className="mx-auto max-w-4xl px-4 lg:px-8 mt-16">
                    <p className="text-center text-lg text-gray-700 leading-relaxed">
                        These are a few of the most <strong className="text-[#5e2b0c]">popular destinations</strong> our clients travel to right now. Whether you're interested in <strong className="text-[#5e2b0c]">Nashville, Vegas, Key West</strong>, or somewhere else entirely, reach out and we'll help make your trip happen—<strong className="text-[#5e2b0c]">your way</strong>.
                    </p>
                </div>
            </div>
        );
    }
}