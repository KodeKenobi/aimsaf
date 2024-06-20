'use client'

const About = () => {


    return (
        <div className="flex w-full h-full items-center relative text-primary">
            <div className="absolute bg-primary w-[30%] h-full right-0 top-0 bg-opacity-75" />
            <div className="w-[70%] h-full bg-white p-20 flex flex-col justify-center ">
                <h2 className="uppercase tracking-widest text-accent text-sm mb-4">about</h2>
                <h3 className="text-[60px] leading-none text-primary font-serif mb-4">Fundamental. <br />Concentrated. Long-Term</h3>
                <p className="text-sm mt-4 font-semibold">Boldhaven is an alternative investment management firm founded in 2017 and based in London.</p>
                <p className="text-sm mt-4">We manage a concentrated strategy focused on long and short opportunities in Europe.</p>
                <p className="text-sm mt-4">Our approach, led by Ronald Sofer (Founder & CIO), is defined by deep fundamental research,a long-term investment horizon and focus on intrinsic value.</p>
            </div>
        </div>
    );
};

export default About;
