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
                        ? 'absolute lg:hidden left-0 top-0 w-[100%] h-screen ease-in-out text-right duration-1000 bg-primary z-[100] pl-0'
                        : 'ease-in-out duration-1000 w-[100%] h-screen absolute top-0 text-right bottom-0 left-[-100%] bg-primary z-[100] pl-0'
                }
            >
                <div className="h-[120px]" />

                <a href="#home" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-3 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        HOME
                    </li>
                </a>
                <a href="#about" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-3 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        ABOUT
                    </li>
                </a>
                <a href="#philosophy" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-3 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        PHILOSOPHY
                    </li>
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-3 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        CONTACT
                    </li>
                </a>
                <a href="https://boldhaven-portal.basispointdev.com/" onClick={() => setIsOpen(false)}>
                    <li
                        className=' uppercase tracking-wide font-sans p-3 pr-12   duration-300  cursor-pointer border-gray-600 text-white'
                    >
                        PORTAL
                    </li>
                </a>
                <p className="md:hidden block font-light font-sans md:text-xs text-[10px] text-gray md:w-[75%]  text-center mx-auto pb-4 lg:text-left lg:mx-0 lg:pb-0 4xl:text-2xl md:mt-8 mt-24 w-[80%]">
                    Copyright © 2024 Boldhaven Management LLP | All rights reserved
                    Boldhaven Management LLP is regulated by the United Kingdom Financial Conduct Authority (FCA) and the US Securities and Exchange Commission (SEC)

                </p>
            </ul>
        </>
    );
};

export default MobileNav;