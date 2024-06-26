'use client'

import { motion } from "framer-motion";

const Philosophy = () => {

    const data = [
        {
            heading: 'Long-term approach',
            content: 'The market’s focus on short-term profits creates opportunities for investors who are able to invest with duration. We work to understand the quality and durability of cash flow generation to gauge earnings power and intrinsic value.',
            icon: '/icons/icon-01.svg',
            timing: 0.6
        },
        {
            heading: 'Contrarian mindset',
            content: 'We favour investments where our views around the long-term trajectory, sustainability and quality of cash-based earnings, informed by deep proprietary research, are significantly different to consensus expectations.',
            icon: '/icons/icon-02.svg',
            timing: 1.2
        },
        {
            heading: 'Market-cap flexibility',
            content: 'We are market-cap agnostic, however we consistently deploy a significant amount of capital in the small-and-mid-cap universe. Less industry coverage in these stratum can drive large dislocations and thus present attractive entry opportunities for the long-term investor.',
            icon: '/icons/icon-03.svg',
            timing: 1.8
        },
        {
            heading: 'Dedicated short process',
            content: 'Our short book does not exist to fund our long book. It is designed to be a standalone portfolio of ideas where we believe the quality, sustainability and trajectory of a business’ cash-based earnings is being misrepresented to the market.',
            icon: '/icons/icon-04.svg',
            timing: 2.4
        },
    ]

    return (
        <div className="flex flex-col w-full h-full justify-center relative bg-primary p-20" id="philosphy">
            <motion.h2
                className="uppercase tracking-widest text-accent text-sm mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
            >
                Philosophy
            </motion.h2>
            <motion.h3 className="text-[60px] text-white relative z-1 font-serif font-light leading-none"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
            >
                Consistency through simplicity</motion.h3>
            <div className="flex w-full justify-between gap-24 mt-10 relative z-10">
                <motion.div
                    className="absolute w-[100%] h-[1px] bg-highlight left-0 top-[20%] z-[1]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ ease: "easeInOut", duration: 3.2 }}
                />
                {data.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <motion.img src={item.icon}
                                className="mx-auto mb-10 mt-6 z-10 relative"
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing }}
                            />
                            <motion.p
                                className="text-white text-sm mb-2"
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing + 0.2 }}
                            >
                                {item.heading}

                            </motion.p>
                            <motion.p
                                className="text-white text-sm"
                                initial={{ opacity: 0, y: -5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.6, delay: item.timing + 0.4 }}
                            >
                                {item.content}
                            </motion.p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Philosophy;
