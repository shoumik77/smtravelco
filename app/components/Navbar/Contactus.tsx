"use client"
import Link from 'next/link';

const Contactusform = () => {
    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                <div className='hidden lg:block'>
                    <Link href="#footer-section">
                        <button type="button" className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-[#5e2b0c] hover:text-white transition-colors duration-300'>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Contactusform;