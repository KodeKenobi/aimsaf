'use client'

import { motion } from "framer-motion";

const About = () => {


    return (
        <div className="flex w-full h-full items-center overflow-hidden relative text-primary" id="about">
            <div className="absolute bg-primary w-[30%] h-full right-0 top-0 bg-opacity-75" />
            <div className="w-[70%] h-full bg-white lg:p-24 p-6 flex flex-col justify-center ">
                <motion.h2
                    className="uppercase tracking-widest text-accent md:text-sm text-xs mb-4 font-sans 4xl:text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                >
                    about
                </motion.h2>
                <motion.h3 className="md:text-[50px] 4xl:text-[80px] text-[24px] leading-tight text-primary font-serif mb-8"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.3 }}
                >
                    Analytical. Independent.
                    <br />
                    Performance-Driven.

                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.5 }}
                    className="  font-[500] font-sans 4xl:text-2xl md:text-base text-xs">AIMSAF HOLDINGS is an independent specialised property
                    advisory consulting and auditing firm serving commercial,
                    retail, and residential asset owners across South Africa and
                    UAE.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.6 }}
                    className=" mt-4 font-sans 4xl:text-2xl md:text-base text-xs">We partner with portfolio managers, property owners, and
                    asset custodians to strengthen governance frameworks,
                    enhance operational discipline, and protect long-term asset
                    value.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.7 }}
                    className=" mt-4 font-sans 4xl:text-2xl md:text-base text-xs">In increasingly complex property environments, performance
                    is no longer driven by occupancy alone. Sustainable yield
                    depends on structured controls, risk mitigation, financial
                    oversight, and measurable operational standards.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.8 }}
                    className=" mt-4 font-sans 4xl:text-2xl md:text-base text-xs">Our approach is Analytical, Independent, and Performance-Driven.
                    We identify inefficiencies, mitigate structural risk, and
                    implement systems that enhance transparency,
                    accountability, and long-term capital preservation.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.9 }}
                    className=" mt-4 font-sans 4xl:text-2xl md:text-base text-xs italic font-semibold">At AIMSAF HOLDINGS, we do not manage properties —
                    we strengthen the systems that protect them.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
