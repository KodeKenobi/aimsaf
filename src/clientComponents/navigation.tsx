"use client"

import MobileNav from "@/clientComponents/mobileNav";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activeSection }: { activeSection: number }) {
    return (
        <div className="flex justify-between items-center w-full font-sans px-10 py-5">
            <Link href="/" className="text-white font-serif text-xl tracking-widest font-bold">
                AIMSAF HOLDINGS
            </Link>
            <div className="lg:flex hidden justify-between items-center gap-12 text-white relative text-sm ">
                <Link className={`py-6 tracking-widest ${activeSection === 0 ? 'border-b-[1px] border-highlight' : ''}`} href={'#home'}>HOME</Link>
                <Link className={`py-6 tracking-widest ${activeSection === 1 ? 'border-b-[1px] border-highlight' : ''}`} href={'#about'}>ABOUT</Link>
                <Link className={`py-6 tracking-widest ${activeSection === 2 ? 'border-b-[1px] border-highlight' : ''}`} href={'#philosophy'}>WHAT WE OFFER</Link>
                <Link className={`py-6 tracking-widest ${activeSection === 3 ? 'border-b-[1px] border-highlight' : ''}`} href={'#whoweserve'}>WHO WE SERVE</Link>
                <Link className={`py-6 tracking-widest ${activeSection === 4 ? 'border-b-[1px] border-highlight' : ''}`} href={'#contact'}>CONTACT</Link>
                <div className="absolute bottom-0 left-0 w-[120%] h-[2px] bg-white bg-opacity-[16%]" />
            </div>
            <MobileNav activeSection={activeSection} />
        </div>
    );
}