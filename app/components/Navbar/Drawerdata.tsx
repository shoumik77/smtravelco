import React from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#aboutus', current: false },
    { name: 'Experiences', href: '#experiences', current: false },
    { name: 'Formals', href: '#formals', current: false },
    { name: 'Meet the Team', href: '#team-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-[#5e2b0c] text-white' : 'text-gray-700 hover:bg-[#f4f1eb] hover:text-[#5e2b0c]',
                                    'block py-3 px-3 rounded-md text-base font-normal'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-6"></div>
                        <Link href="#footer-section">
                            <button className="bg-[#5e2b0c] w-full hover:bg-[#7a3910] text-white border-0 font-medium py-3 px-4 rounded-full transition-colors duration-300">
                                Book
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;