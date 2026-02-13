"use client"

import MobileNav from "@/clientComponents/mobileNav";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex justify-between items-center w-full font-sans px-10 py-5">
            <Link href="/" className="text-white font-serif text-xl tracking-widest font-bold">
                AIMSAF HOLDINGS
            </Link>
            <div className="lg:flex hidden justify-between items-center gap-12 text-white relative text-sm ">
                <Link className="py-6 border-b-[1px] border-highlight tracking-widest" href={'#home'}>HOME</Link>
                <Link className="py-6 tracking-widest" href={'#about'}>ABOUT</Link>
                <Link className="py-6 tracking-widest" href={'#philosophy'}>SERVICES</Link>
                <Link className="py-6 tracking-widest" href={'#contact'}>CONTACT</Link>
                <div className="absolute bottom-0 left-0 w-[120%] h-[2px] bg-white bg-opacity-[16%]" />
            </div>
            <MobileNav />
        </div>
    );
}