'use client'

import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React from "react";

const Contact = () => {
    const [success, setSuccess] = React.useState(false);
    const data = [
        {
            icon: '/icons/icon-contact-phone.svg',
            href: 'tel:+44 20 8017 4521',
            label: 'Phone',
            link: '+44 20 8017 4521',
            timing: 0.6
        },
        {
            icon: '/icons/icon-contact-email.svg',
            href: 'mailto:info@boldhaven.com',
            label: 'Email',
            link: 'info@boldhaven.com',
            timing: 0.8
        },
        {
            icon: '/icons/icon-contact-address.svg',
            href: 'tel:+44 20 8017 4521',
            label: 'Address',
            link: '100 Wigmore Street, London W1U 3RN',
            timing: 1
        },
    ];

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        surname: Yup.string().required('Surname is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required')
    });

    const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
        try {
            await axios.post('/api/contact', values);
            setSuccess(true);
            resetForm();
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col w-full h-full justify-baseline relative bg-contact bg-cover lg:p-24 p-6 pb-0 lg:pb-0" id="contact">
            <div className="grid md:grid-cols-2 grid-cols-1 md:my-auto mt-auto my-0 ">
                <div>
                    <motion.h2
                        className="uppercase tracking-widest text-accent md:text-sm text-xs mb-4 font-sans 4xl:text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.7 }}
                    >
                        Contact
                    </motion.h2>
                    <motion.h3
                        className="md:text-[55px] text-[30px] text-white relative z-1 font-serif font-light leading-none md:mb-14 mb-8 4xl:text-[70px]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
                    >
                        Get in touch
                    </motion.h3>
                    <div className="flex flex-col md:gap-6 gap-4 mb-10 font-sans">
                        {data.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <motion.img
                                    src={item.icon}
                                    className="mr-16 md:w-auto w-12 4xl:w-28"
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
                                    <p className="text-white md:text-sm text-xs font-semibold mb-2 4xl:text-2xl">{item.label}</p>
                                    <a className="text-white text-xs 4xl:text-2xl" href={item.href}>{item.link}</a>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Formik
                        initialValues={{ name: '', surname: '', email: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="w-full font-sans">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <motion.div
                                        className="w-1/2 px-3 md:mb-0"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeIn", duration: 0.4, delay: 1 }}
                                    >
                                        <Field
                                            className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 font-sans md:text-sm text-xs py-3 4xl:text-2xl"
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                                    </motion.div>
                                    <motion.div
                                        className="w-1/2 px-3 md:mb-0"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeIn", duration: 0.4, delay: 1 }}
                                    >
                                        <Field
                                            className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 md:text-sm text-xs py-3 4xl:text-2xl"
                                            id="surname"
                                            name="surname"
                                            type="text"
                                            placeholder="Surname"
                                        />
                                        <ErrorMessage name="surname" component="div" className="text-red-500 text-xs mt-1" />
                                    </motion.div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <motion.div
                                        className="w-full md:w-2/2 px-3 md:mb-0"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeIn", duration: 0.4, delay: 1.2 }}
                                    >
                                        <Field
                                            className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 md:text-sm text-xs py-3 4xl:text-2xl"
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                    </motion.div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <motion.div
                                        className="w-full md:w-2/2 px-3 md:mb-0"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ ease: "easeIn", duration: 0.4, delay: 1.4 }}
                                    >
                                        <Field
                                            className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 md:text-sm text-xs py-3 4xl:text-2xl"
                                            id="message"
                                            name="message"
                                            as="textarea"
                                            placeholder="Message"
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1" />
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="flex items-center justify-between"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ease: "easeIn", duration: 0.4, delay: 1.6 }}
                                >
                                    <button
                                        className="bg-transparent md:text-sm text-xs text-accent ml-auto md:mb-0 mb-2 4xl:text-2xl"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </motion.div>
                                {success && <p className="text-accent lg:text-sm 2xl:text-base text-[10px] 4xl:text-2xl w-[90%] lg:w-full">Thank you for your message, we will get back to you shortly</p>}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <motion.div
                className="bg-transparent w-full py-6 flex lg:flex-row flex-col items-center justify-between border-[#ffffff15] border-t"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.4, delay: 2.5 }}
            >
                <div className="text-center lg:text-left">
                    <a href="/regulatory-documents" className="font-bold font-sans text-xs text-white w-[75%] text-center mx-auto md:mb-8 mb-8 lg:text-left lg:mx-0 lg:pb-0 4xl:text-2xl ">Regulatory Documents</a>
                    <p className="md:block hidden font-light font-sans md:text-xs text-[10px] text-gray md:w-[75%] w-full text-center mx-auto pb-4 lg:text-left lg:mx-0 lg:pb-0 4xl:text-2xl md:mt-8 mt-8">
                        Copyright © 2024 Boldhaven Management LLP | All rights reserved
                        Boldhaven Management LLP is regulated by the United Kingdom Financial Conduct Authority (FCA) and the US Securities and Exchange Commission (SEC)
                    </p>
                </div>
                <img src={"/boldhaven-logo.svg"} className="md:w-auto w-32 mt-8 md:mt-0" alt="logo" />
            </motion.div>
        </div>
    );
};

export default Contact;