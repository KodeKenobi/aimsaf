'use client'

import { motion } from "framer-motion";

const Contact = () => {

    const data = [
        {
            icon: '/icons/icon-contact-phone.svg',
            href: 'tel:+44 20 8017 4521',
            label: 'Phone',
            link: '+44 20 8017 4521',
            timing: 0.6
        },
        {
            icon: '/icons/icon-contact-email.svg',
            href: 'mailto:info@boldhaven.com',
            label: 'Phone',
            link: 'info@boldhaven.com',
            timing: 0.8
        },
        {
            icon: '/icons/icon-contact-address.svg',
            href: 'tel:+44 20 8017 4521',
            label: 'Address',
            link: '+100 Wigmore Street, London W1U 3RN',
            timing: 1
        },
    ]

    return (
        <div className="flex flex-col w-full h-full justify-between relative bg-contact bg-cover md:p-20 p-12 pb-0" id="contact">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div>
                    <motion.h2
                        className="uppercase tracking-widest text-accent md:text-sm text-xs mb-4 font-sans"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.7 }}
                    >
                        Contact
                    </motion.h2>
                    <motion.h3
                        className="md:text-[55px] text-[30px] text-white relative z-1 font-serif font-light leading-none md:mb-14 mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
                    >
                        Get in touch
                    </motion.h3>
                    <div className="flex flex-col md:gap-12 gap-4 mb-10 font-sans">
                        {data.map((item: any, index: number) => {
                            return (
                                <div key={index} className="flex items-center">
                                    <motion.img
                                        src={item.icon}
                                        className="mr-16 md:w-auto w-12"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeInOut", duration: 0.5, delay: item.timing }}
                                    />
                                    <motion.div
                                        className="flex flex-col"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeInOut", duration: 0.5, delay: item.timing + 0.2 }}
                                    >
                                        <p className="text-white md:text-sm text-xs font-semibold mb-2">{item.label}</p>
                                        <a className="text-white text-xs" href={item.href}>{item.link}</a>
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full flex justify-center items-center ">
                    <form className="w-full font-sans">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <motion.div
                                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 1 }}
                            >
                                <input className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 font-sans md:text-sm text-xs py-3" id="name" type="text" placeholder="Name" />
                            </motion.div>
                            <motion.div
                                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 1 }}
                            >
                                <input className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 md:text-sm text-xs py-3" id="surname" type="text" placeholder="Surname" />
                            </motion.div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <motion.div
                                className="w-full md:w-2/2 px-3 mb-6 md:mb-0"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 1.2 }}
                            >
                                <input className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 md:text-sm text-xs py-3" id="email" type="email" placeholder="Email" />
                            </motion.div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <motion.div
                                className="w-full md:w-2/2 px-3 mb-6 md:mb-0"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 1.4 }}
                            >
                                <textarea className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 md:text-sm text-xs py-3" id="message" placeholder="Message"></textarea>
                            </motion.div>
                        </div>
                        <motion.div
                            className="flex items-center justify-between"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeIn", duration: 0.4, delay: 1.6 }}
                        >
                            <button className="bg-transparent md:text-sm text-xs text-accent ml-auto" type="button">
                                Submit
                            </button>
                        </motion.div>
                    </form>
                </div>
            </div >
            <motion.div
                className="bg-transparent w-full py-6 flex lg:flex-row flex-col items-center justify-between border-[#ffffff15] border-t mt-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.4, delay: 2.5 }}
            >
                <div>
                    <p className="font-bold font-sans text-xs text-white w-[75%] text-center mx-auto md:mb-8 mb-2 lg:text-left lg:mx-0 lg:pb-0">Regulatory Documents</p>
                    <p className="font-light font-sans md:text-xs text-[10px] text-gray md:w-[75%] w-full text-center mx-auto pb-4 lg:text-left lg:mx-0 lg:pb-0">
                        Boldhaven Management LLP is regulated by the United Kingdom Financial
                        Conduct Authority (FCA) and the US Securities and Exchange Commission
                        (SEC)
                    </p>
                </div>
                <img src={"/boldhaven-logo.svg"} className="md:w-auto w-32" alt="logo" />
            </motion.div>
        </div >
    );
};

export default Contact;
