'use client'

import Navigation from "@/serverComponents/navigation/navigation";
import { motion } from "framer-motion";

const LandingPage = () => {


    return (
        <div className="flex w-full h-full items-center p-24 relative">
            <Navigation />
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '30%', opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
                className="absolute bg-primary w-[30%] h-full right-0 top-0 bg-opacity-75"
            />
            <motion.h1
                className="ml-auto w-[45%] text-[69px] text-white relative z-1 font-serif font-light leading-none mr-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.6 }}
            >
                Boldhaven Management is  <br />a fundamental <br /> investment manager based in London
            </motion.h1>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg" className="absolute z-100 bottom-20 z-10 right-[calc(37%)]" width="28" height="28" viewBox="0 0 28 28" fill="none"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.8 }}
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 14C1.75 7.2345 7.2345 1.75 14 1.75C20.7655 1.75 26.25 7.2345 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.2345 26.25 1.75 20.7655 1.75 14ZM0 14C0 6.26797 6.26797 0 14 0C21.732 0 28 6.26797 28 14C28 21.732 21.732 28 14 28C6.26797 28 0 21.732 0 14ZM14.6186 20.5562L13.9998 21.175L13.3812 20.5562L8.1312 15.3062L9.36863 14.0688L13.1248 17.8252V6.81258H14.8748V17.8252L18.6312 14.0688L19.8686 15.3062L14.6186 20.5562Z" fill="#417CFF" />
            </motion.svg>
            <motion.div
                initial={{ height: 0, y: -420 }}
                whileInView={{ height: '420px', y: 0 }}
                transition={{ ease: "easeInOut", duration: 4, delay: 1.2 }}
                className="h-[420px] w-[1px] bg-highlight absolute bottom-[calc(0px-338px)] rotate-180 z-10 right-[calc(37.9%)]"
            />
        </div>
    );
};

export default LandingPage;
