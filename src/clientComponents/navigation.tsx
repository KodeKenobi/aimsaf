"use client"

import MobileNav from "@/clientComponents/mobileNav";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex justify-between items-center w-full font-sans">
            <Image width={200} height={150} alt="Boldhaven-logo" className="w-32 lg:w-auto" src={'/boldhaven-logo.svg'} />
            <div className="lg:flex hidden justify-between items-center gap-12 text-white relative text-sm ">
                <Link className="py-6 border-b-[1px] border-highlight tracking-widest" href={'#home'}>HOME</Link>
                <Link className="py-6 tracking-widest" href={'#about'}>ABOUT</Link>
                <Link className="py-6 tracking-widest" href={'#philosophy'}>PHILOSOPHY</Link>
                <Link className="py-6 tracking-widest" href={'#contact'}>CONTACT</Link>
                <Link className="py-6 tracking-widest" href={'https://boldhaven-portal.basispointdev.com/'}>PORTAL</Link>
                <div className="absolute bottom-0 left-0 w-[120%] h-[2px] bg-white bg-opacity-[16%]" />
            </div>
            <MobileNav />
        </div>
    );
}