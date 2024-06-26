import MobileNav from "@/clientComponents/mobileNav";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex justify-between items-center md:px-20 px-8 h-16 md:h-32 absolute w-full bg-secondary z-20 top-0 left-0">
            <Image width={200} height={150} alt="Boldhaven-logo" className="w-32 md:w-auto" src={'./boldhaven-logo.svg'} />
            <div className="md:flex hidden justify-between items-center gap-20 text-white relative text-sm">
                <Link className="py-6 border-b-[1px] border-highlight" href={''}>HOME</Link>
                <Link className="py-6" href={'#about'}>ABOUT</Link>
                <Link className="py-6" href={'#philosphy'}>PHILOSOPHY</Link>
                <Link className="py-6" href={'#contact'}>CONTACT</Link>
                <Link className="py-6" href={'https://boldhaven-portal.basispointdev.com/'}>PORTAL</Link>
                <div className="absolute bottom-0 left-0 w-[120%] h-[2px] bg-white bg-opacity-[16%]" />
            </div>
            <MobileNav />
        </div>
    )
}