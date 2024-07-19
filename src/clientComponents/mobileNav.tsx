'use client'

import { useEffect, useState } from "react";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-[1px] w-7 my-1 rounded-full bg-white transition ease transform duration-300 z-10`;

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isOpen])

    return (
        <>
            <button
                className="flex flex-col h-12 w-12 justify-center lg:hidden items-center group z-[101]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${isOpen
                        ? "rotate-45 translate-y-2  group-hover:opacity-100"
                        : " group-hover:opacity-100"
                        }`}
                />
                <div
                    className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : " group-hover:opacity-100"
                        }`}
                />
                <div
                    className={`${genericHamburgerLine} ${isOpen
                        ? "-rotate-45 -translate-y-[10.5px]  group-hover:opacity-100"
                        : " group-hover:opacity-100"
                        }`}
                />
            </button>

            <ul
                className={
                    isOpen
                        ? 'absolute lg:hidden left-0 top-0 w-[100%] h-screen ease-in-out text-right duration-1000 bg-primary z-[100]'
                        : 'ease-in-out duration-1000 w-[100%] h-screen fixed top-0 text-right bottom-0 left-[-100%] bg-primary z-[100]'
                }
            >
                {/* Mobile Logo */}
                {/* <img src="/logo.png" width={120} className="ml-4 mt-10 mb-10" /> */}
                <div className="h-[120px]" />

                {/* Mobile Navigation Items */}
                <a href="#home" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-7 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        HOME
                    </li>
                </a>
                <a href="#about" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-7 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        ABOUT
                    </li>
                </a>
                <a href="#philosophy" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-7 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        PHILOSOPHY
                    </li>
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-7 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        CONTACT
                    </li>
                </a>
            </ul>
        </>
    );
};

export default MobileNav;