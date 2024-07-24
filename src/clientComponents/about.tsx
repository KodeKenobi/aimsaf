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
                <motion.h3 className="md:text-[55px] 4xl:text-[80px] text-[24px] leading-none text-primary font-serif mb-14"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
                >
                    Fundamental.
                    <br />
                    Concentrated. Long-Term.

                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1.2 }}
                    className="  font-[500] font-sans 4xl:text-2xl md:text-base text-xs">Boldhaven is an alternative investment management firm founded in 2017 and based in London.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1.4 }}
                    className=" mt-8 font-sans 4xl:text-2xl md:text-base text-xs">We manage a concentrated strategy focused on long and short opportunities in Europe.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 1.6 }}
                    className=" mt-8 font-sans 4xl:text-2xl md:text-base text-xs">Our approach, led by Ronald Sofer (Founder & CIO), is defined by deep fundamental research,<br /> a long-term investment horizon and a focus on intrinsic value.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
