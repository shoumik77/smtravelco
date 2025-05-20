import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 items-center'>

                {/* COLUMN-1 - IMAGE */}
                <div className='hidden lg:flex justify-center items-center'>
                    <Image src="https://images.squarespace-cdn.com/content/v1/67f57c6954e0956ede8815af/85f50979-df73-496e-8dd9-02cbd35e7943/IMG_5641.jpeg?format=1500w" alt="hero-image" width={600} height={480} className="rounded-2xl" />
                </div>

                {/* COLUMN-2 - TEXT & BUTTON */}
                <div className="mx-auto sm:mx-0">
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                            Book your <br /> dream destination <br /> today.
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <Link href="#footer-section">
                            <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-[#5e2b0c] text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#7a3910] transition-all duration-300'>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner;