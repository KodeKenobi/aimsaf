'use client'

import { motion } from "framer-motion";

const Philosophy = () => {

    const data = [
        {
            heading: 'Governance & Compliance Frameworks',
            content: 'We design and assess governance systems that strengthen accountability, regulatory alignment, and board-level oversight.',
            icon: '/icons/icon-01.svg',
            timing: 0.2
        },
        {
            heading: 'Risk & Operational Control',
            content: 'We identify structural vulnerabilities across vendor management, maintenance frameworks, insurance exposure, and operational processes. Risk left unmanaged becomes capital erosion.',
            icon: '/icons/icon-02.svg',
            timing: 0.3
        },
        {
            heading: 'Financial Performance Optimisation',
            content: 'We enhance Net Operating NOI through disciplined cost control, revenue leakage detection, benchmarking, and structured financial oversight.',
            icon: '/icons/icon-03.svg',
            timing: 0.4
        },
        {
            heading: 'Asset Strategy & Capital Planning',
            content: 'We align operational frameworks with long-term asset preservation and yield stability strategies. Short-term reaction is replaced with long-term clarity.',
            icon: '/icons/icon-04.svg',
            timing: 0.5
        },
        {
            heading: 'Portfolio Structuring & Scalability',
            content: 'We implement systems that allow portfolios to expand without governance breakdown. Growth without structure creates exposure.',
            icon: '/icons/icon-05.svg',
            timing: 0.6
        },
    ]

    return (
        <div className="flex flex-col w-full h-full justify-center relative bg-primary lg:p-24 lg:pb-0 pb-0 p-6" id="philosophy">
            <motion.h2
                className="uppercase tracking-widest text-accent md:text-sm text-xs mb-4 font-sans 4xl:text-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
            >
                What we offer
            </motion.h2>
            <motion.h3 className="md:text-[45px] 4xl:text-[80px] text-[24px] leading-tight text-white font-serif mb-4 md:w-[60%]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.3 }}
            >
                Structured, outcome-driven advisory and auditing across five core pillars</motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full justify-between md:gap-6 gap-[5vh] gap-x-[5vw] md:mt-10 mt-4 relative z-10 overflow-hidden">
                <motion.div
                    className="absolute w-[100%] h-[1px] bg-highlight left-0 top-[48px] z-[1] hidden lg:block"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ ease: "easeInOut", duration: 3.2 }}
                />
                {data.map((item: any, index: number) => {
                    return (
                        <div key={index} className="lg:block flex font-sans xl:px-4 lg:px-2 ">
                            <div className="relative">
                                <motion.img src={item.icon}
                                    className="mx-auto lg:mb-10 my-2 lg:mt-6 z-10 relative w-12 h-12 lg:block hidden 4xl:w-[100px] 4xl:h-[100px]"
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing }}
                                ></motion.img>
                            </div>
                            <div>
                                <motion.p
                                    className="text-white md:text-sm text-xs 2xl:text-lg font-semibold md:mb-4 mb-2 4xl:text-2xl"
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing + 0.2 }}
                                >
                                    {item.heading}

                                </motion.p>
                                <motion.p
                                    className="text-white lg:text-xs 2xl:text-sm text-[10px] 4xl:text-xl w-[90%] lg:w-full leading-relaxed"
                                    initial={{ opacity: 0, y: -5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing + 0.4 }}
                                >
                                    {item.content}
                                </motion.p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Philosophy;
