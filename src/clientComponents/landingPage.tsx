'use client'

import Navigation from "@/clientComponents/navigation";
import { motion } from "framer-motion";

const LandingPage = () => {


    return (
        <div id="home" className="flex w-full h-full items-center md:p-24 p-6 relative bg-hero bg-cover">
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '30%', opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
                className="absolute bg-primary md:w-[30%] w-[15%] h-full right-0 top-0 bg-opacity-75"
            />
            <motion.h1
                className="lg:ml-auto lg:w-[45%] 4xl:text-[100px] md:w-[85%] lg:text-[60px] 2xl:text-[69px] md:text-[55px] w-[90%] text-[40px] text-white relative z-1 font-serif font-light lg:leading-[1.2] leading-none lg:mr-20 "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.6 }}
            >
                Structure. Governance. Sustainable Asset Performance.
            </motion.h1>
            <div className="absolute z-100 sm:bottom-10 bottom-10 md:bottom-[5vw] lg:bottom-[5vw] xl:bottom-[8vw] 2xl:bottom-[10vw] z-10 right-[calc(37%)]">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg" className="" width="28" height="28" viewBox="0 0 28 28" fill="none"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.8 }}
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 14C1.75 7.2345 7.2345 1.75 14 1.75C20.7655 1.75 26.25 7.2345 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.2345 26.25 1.75 20.7655 1.75 14ZM0 14C0 6.26797 6.26797 0 14 0C21.732 0 28 6.26797 28 14C28 21.732 21.732 28 14 28C6.26797 28 0 21.732 0 14ZM14.6186 20.5562L13.9998 21.175L13.3812 20.5562L8.1312 15.3062L9.36863 14.0688L13.1248 17.8252V6.81258H14.8748V17.8252L18.6312 14.0688L19.8686 15.3062L14.6186 20.5562Z" fill="#417CFF" />
                </motion.svg>
                <motion.div
                    initial={{ height: 0, y: 0 }}
                    whileInView={{ height: '50vh', y: 0 }}
                    transition={{ ease: "easeInOut", duration: 4, delay: 1.2 }}
                    className="h-[50vh] hidden xl:block w-[2px] bg-highlight absolute  rotate-180 z-10 right-[46%]"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        transition={{ ease: "easeInOut", duration: 2, delay: 3.5 }}
                        className="h-[2px] w-[80px] bg-highlight absolute bottom-0 rotate-180 z-10 right-[calc(37.9%)]"
                    ></motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
