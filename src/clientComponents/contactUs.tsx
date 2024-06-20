'use client'

const Contact = () => {

    const data = [
        {
            icon: '/icons/icon-contact-phone.svg',
            href: 'tel:+44 20 8017 4521',
            label: 'Phone',
            link: '+44 20 8017 4521'
        },
        {
            icon: '/icons/icon-contact-email.svg',
            href: 'mailto:info@boldhaven.com',
            label: 'Phone',
            link: 'info@boldhaven.com'
        },
        {
            icon: '/icons/icon-contact-address.svg',
            href: 'tel:+44 20 8017 4521',
            label: 'Address',
            link: '+100 Wigmore Street, London W1U 3RN'
        },
    ]

    return (
        <div className="flex flex-col w-full h-full justify-center relative bg-contact bg-cover p-20 pb-0">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="uppercase tracking-widest text-accent text-sm mb-4">Contact</h2>
                    <h3 className="text-[60px] text-white relative z-1 font-serif font-light leading-none mb-10">Get in touch</h3>
                    <div className="flex flex-col gap-8">
                        {data.map((item: any, index: number) => {
                            return (
                                <div key={index} className="flex items-center">
                                    <img src={item.icon} className="mr-16" />
                                    <div className="flex flex-col">
                                        <p className="text-white text-sm font-semibold mb-2">{item.label}</p>
                                        <a className="text-white text-xs" href={item.href}>{item.link}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 font-sans text-sm py-3" id="name" type="text" placeholder="Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 text-sm py-3" id="surname" type="text" placeholder="Surname" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <input className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 text-sm py-3" id="email" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <textarea className="appearance-none block w-full bg-transparent text-white border-b-[1px] border-gray leading-tight placeholder:text-white focus:outline-none focus:border-gray-400 text-sm py-3" id="message" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-transparent text-sm text-accent ml-auto" type="button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-transparent w-full py-6 pt-12 flex lg:flex-row flex-col items-center justify-between xl:px-12 2xl:px-12 border-[#ffffff15] border-t mt-auto">
                <div>
                <p className="font-bold font-sans text-xs text-white w-[75%] text-center mx-auto mb-8 lg:text-left lg:mx-0 lg:pb-0">Regulatory Documents</p>
                    <p className="font-light font-sans text-xs text-gray w-[75%] text-center mx-auto pb-4 lg:text-left lg:mx-0 lg:pb-0">
                        Boldhaven Management LLP is regulated by the United Kingdom Financial
                        Conduct Authority (FCA) and the US Securities and Exchange Commission
                        (SEC)
                    </p>
                </div>
                <img src={"/boldhaven-logo.svg"} alt="logo" />
            </div>
        </div>
    );
};

export default Contact;
