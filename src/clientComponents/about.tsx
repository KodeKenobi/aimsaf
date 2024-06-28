'use client'

import { motion } from "framer-motion";

const About = () => {


    return (
        <div className="flex w-full h-full items-center relative text-primary" id="about">
            <div className="absolute bg-primary w-[30%] h-full right-0 top-0 bg-opacity-75" />
            <div className="w-[70%] h-full bg-white lg:p-20 p-12 flex flex-col justify-center ">
                <motion.h2
                    className="uppercase tracking-widest text-accent text-sm mb-4 font-sans"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                >
                    about
                </motion.h2>
                <motion.h3 className="md:text-[55px] text-[30px] leading-none text-primary font-serif mb-14"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
                >
                    Fundamental. <br />Concentrated. Long-Term
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1.2 }}
                    className="text-sm  font-semibold font-sans">Boldhaven is an alternative investment management firm founded in 2017 and based in London.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1.4 }}
                    className="text-sm mt-8 font-sans">We manage a concentrated strategy focused on long and short opportunities in Europe.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1.6 }}
                    className="text-sm mt-8 font-sans">Our approach, led by Ronald Sofer (Founder & CIO), is defined by deep fundamental research,a long-term investment horizon and focus on intrinsic value.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
