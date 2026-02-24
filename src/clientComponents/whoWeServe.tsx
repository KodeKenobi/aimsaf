'use client'

import { motion } from "framer-motion";

const WhoWeServe = () => {
    const clients = [
        "Mall operators and retail property owners",
        "Residential complex portfolios",
        "Corporate property holdings",
        "Mixed-use developments",
        "Private and institutional asset custodians"
    ];

    return (
        <div className="flex w-full h-full items-center overflow-hidden relative text-primary bg-white" id="whoweserve">
            <div className="absolute bg-primary w-[30%] h-full left-0 top-0 bg-opacity-75 hidden lg:block" />
            <div className="lg:w-[70%] w-full h-full lg:ml-auto lg:p-24 p-6 flex flex-col justify-center z-10">
                <motion.h2
                    className="uppercase tracking-widest text-accent md:text-sm text-xs mb-4 font-sans 4xl:text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                >
                    WHO WE SERVE
                </motion.h2>
                <motion.h3 className="md:text-[40px] 4xl:text-[70px] text-[24px] lg:w-[85%] leading-tight text-primary font-serif mb-12"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                >
                    Active Across South Africa & the UAE with successful corporate portfolio management in excess of 200 Million Rands.
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
                    >
                        <p className="font-sans 4xl:text-2xl md:text-base text-xs leading-relaxed text-gray-700">
                            AIMSAF HOLDINGS supports property portfolios operating within diverse regulatory and economic environments. Our dual-market experience enables structured advisory tailored to both emerging and mature property markets.
                        </p>
                        <p className="mt-8 font-sans 4xl:text-2xl md:text-base text-xs font-semibold text-primary italic border-l-4 border-accent pl-6">
                            Our advisory approach is tailored to portfolios requiring disciplined governance, financial transparency, and sustainable long-term yield performance.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.3 }}
                    >
                        <h4 className="font-serif text-lg mb-6 text-accent uppercase tracking-widest border-b border-accent/20 pb-2">We work with:</h4>
                        <ul className="space-y-4">
                            {clients.map((client, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center font-sans md:text-base text-xs text-primary group"
                                >
                                    <span className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                    {client}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeServe;
