'use client'

import { motion } from "framer-motion";

const Philosophy = () => {

    const data = [
        {
            heading: 'Long-term approach',
            content: 'The market’s focus on short-term profits creates opportunities for investors who can invest with duration. We work to understand the quality and durability of cash flow generation to gauge earnings power and intrinsic value.',
            icon: '/icons/icon-01.svg',
            timing: 0.6
        },
        {
            heading: 'Contrarian mindset',
            content: 'We favour investments where our views around the long-term trajectory, sustainability and qualityof cash-based earnings, informed by deep proprietary research, are significantly different to consensus expectations.',
            icon: '/icons/icon-02.svg',
            timing: 1.2
        },
        {
            heading: 'Market-cap flexibility',
            content: 'We are market-cap agnostic, however, we consistently deploy a significant amount of capital in the small- and mid-cap universe. Less industry coverage in these strata can drive large dislocations and thus present attractive entry opportunities for the long-term investor.',
            icon: '/icons/icon-03.svg',
            timing: 1.8
        },
        {
            heading: 'Dedicated short process',
            content: 'Our short book does not exist to fund our long book.It is designed to be a standalone portfolio of ideas where we believe the quality, sustainability and trajectory of a business’s cash-based earnings are misrepresented tothe market.',
            icon: '/icons/icon-04.svg',
            timing: 2.4
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
                Philosophy
            </motion.h2>
            <motion.h3 className="md:text-[55px] 4xl:text-[80px] text-[24px] leading-none text-white font-serif mb-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
            >
                Consistency through simplicity</motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full justify-between md:gap-6 gap-[5vh] gap-x-[5vw] md:mt-10 mt-4 relative z-10 overflow-hidden">

                {data.map((item: any, index: number) => {
                    return (
                        <div key={index} className="lg:block flex font-sans xl:px-10 lg:px-2 ">
                            <div className="relative">
                                <motion.img src={item.icon}
                                    className="mx-auto lg:mb-10 my-2 lg:mt-6 z-10 relative w-12 h-12 lg:block hidden 4xl:w-[100px] 4xl:h-[100px]"
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing }}
                                ></motion.img>
                                <motion.div
                                    className={`absolute w-[110vw] h-[1px] bg-highlight left-[-39px] top-[calc(50%)] z-[1] ${index == 0 ? 'lg:block' : ''} hidden`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100vw' }}
                                    transition={{ ease: "easeInOut", duration: 4 }}
                                />
                            </div>
                            <div>
                                <motion.p
                                    className="text-white md:text-sm text-xs 2xl:text-xl md:mb-4 mb-1 4xl:text-2xl"
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing + 0.2 }}
                                >
                                    {item.heading}

                                </motion.p>
                                <motion.p
                                    className="text-white lg:text-sm 2xl:text-base text-[10px] 4xl:text-2xl w-[90%] lg:w-full"
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
