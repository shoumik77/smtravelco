"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<{
        submitting: boolean;
        status: 'success' | 'error' | null;
    }>({
        submitting: false,
        status: null // 'success', 'error', or null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus({ submitting: true, status: null });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'ff99d58f-599c-4381-aef9-6887c30a4c14', // Replace with your actual access key
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                    subject: 'New Travel Consultation Request'
                })
            });

            const result = await response.json();
            if (result.success) {
                // Success
                setFormStatus({ submitting: false, status: 'success' });
                // Reset the form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setFormStatus(prev => ({ ...prev, status: null }));
                }, 5000);
            } else {
                // Error
                console.error('Web3Forms submission error:', result);
                setFormStatus({ submitting: false, status: 'error' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus({ submitting: false, status: 'error' });
        }
    };

    return (
        <div className="bg-[#f4f1eb] mt-16" id="footer-section">
            <div className="mx-auto max-w-2xl pt-16 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-16 lg:grid-cols-2 xl:gap-x-24">

                    {/* COLUMN-1 - Company Info */}
                    <div className="flex flex-col justify-center">
                        <h3 className='text-[#5e2b0c] text-4xl font-semibold leading-9 mb-4 lg:mb-12'>SM Travel Company</h3>
                        <p className='text-gray-700 text-lg mb-8 leading-relaxed'>
                            Making your travel dreams a reality, one trip at a time.
                        </p>
                        <div className='flex gap-6 mb-8'>
                            <Link href="mailto:contact@smtravelcompany.com" className="hover:opacity-70 transition-opacity duration-300">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#5e2b0c"/>
                                </svg>
                            </Link>
                            <Link href="https://instagram.com" className="hover:opacity-70 transition-opacity duration-300">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#5e2b0c"/>
                                </svg>
                            </Link>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-[#5e2b0c] text-lg font-bold mb-4">Quick Links</p>
                                <ul className="space-y-2">
                                    <li><Link href="/" className="text-gray-600 hover:text-[#5e2b0c] transition-colors">Home</Link></li>
                                    <li><Link href="#aboutus-section" className="text-gray-600 hover:text-[#5e2b0c] transition-colors">About</Link></li>
                                    <li><Link href="#wework-section" className="text-gray-600 hover:text-[#5e2b0c] transition-colors">Experiences</Link></li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[#5e2b0c] text-lg font-bold mb-4">Travel Types</p>
                                <ul className="space-y-2">
                                    <li><Link href="#manage-section" className="text-gray-600 hover:text-[#5e2b0c] transition-colors">College Formals</Link></li>
                                    <li><Link href="#wework-section" className="text-gray-600 hover:text-[#5e2b0c] transition-colors">Popular Destinations</Link></li>
                                    <li><Link href="#team-section" className="text-gray-600 hover:text-[#5e2b0c] transition-colors">Meet the Team</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 - Contact Form */}
                    <div>
                        <h3 className='text-[#5e2b0c] text-3xl font-semibold mb-6'>Contact Us</h3>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                            Interested in a FREE traveling consultation? Schedule a call with us to discuss details such as budget, destination, group sizes, etc. We will quote you completely for FREE!
                        </p>
                        
                        {formStatus.status === 'success' && (
                            <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <p>Thank you! Your message has been sent successfully. We'll be in touch soon.</p>
                            </div>
                        )}
                        
                        {formStatus.status === 'error' && (
                            <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                </svg>
                                <p>There was an error sending your message. Please try again or email us directly.</p>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Hidden Web3Forms honeypot field to prevent spam */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                            
                            {/* Name Fields */}
                            <div>
                                <label className="text-[#5e2b0c] text-lg font-medium mb-3 block">
                                    Name <span className="text-gray-500">(required)</span>
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-gray-600 text-sm mb-2 block">First Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:border-[#5e2b0c] focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 text-sm mb-2 block">Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:border-[#5e2b0c] focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="text-[#5e2b0c] text-lg font-medium mb-3 block">
                                    Email <span className="text-gray-500">(required)</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:border-[#5e2b0c] focus:outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="text-[#5e2b0c] text-lg font-medium mb-3 block">Message</label>
                                <textarea 
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:border-[#5e2b0c] focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your dream trip..."
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                disabled={formStatus.submitting}
                                className={`bg-[#5e2b0c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7a3910] hover:shadow-lg transition-all duration-300 ${formStatus.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {formStatus.submitting ? 'SENDING...' : 'SEND'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-gray-300">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-gray-500 text-lg'>
                                &copy; {new Date().getFullYear()} SM Travel Company. All Rights Reserved.
                            </h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-gray-500 pr-6 hover:text-[#5e2b0c] transition-colors">Privacy Policy</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-gray-500 pl-6 border-solid border-l border-gray-300 hover:text-[#5e2b0c] transition-colors">
                                    Terms & Conditions
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;