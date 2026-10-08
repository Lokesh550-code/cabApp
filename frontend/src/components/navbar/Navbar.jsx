import logoDesktop from "../../assets/images/cgcabwala-logo.svg";
import logoMobile from "../../assets/images/cgcabwala-logo-mobile.svg";
import { useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="h-16 md:h-20 w-full px-12 text-md font-sans">
        <div className="h-full w-full flex justify-between items-center">
            <img className="h-full hidden py-2 sm:block" src={logoDesktop} alt="logo" />
            <img className="h-full py-3 block sm:hidden" src={logoMobile} alt="logo" />
            <div className="hidden md:flex gap-3 font-bold">
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 border-b-2 border-surface hover:border-text-muted text-sm md:text-md transition" href="">Services</a>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 border-b-2 border-surface hover:border-text-muted text-sm md:text-md transition" href="">Fleet</a>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 border-b-2 border-surface hover:border-text-muted text-sm md:text-md transition" href="">Routes</a>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 border-b-2 border-surface hover:border-text-muted text-sm md:text-md transition" href="">About</a>
            </div>
            <button onClick={() => {setIsActive(prev => !prev)}} className="md:hidden text-md">
                {isActive !== true? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu preview-icon"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>): (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)}
            </button>
        </div>
        <div className={isActive? "w-full flex flex-col gap-2 font-bold": "hidden"}>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 text-sm md:text-md transition" href="">Services</a>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 text-sm md:text-md transition" href="">Fleet</a>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 text-sm md:text-md transition" href="">Routes</a>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 text-sm md:text-md transition" href="">About</a>
                <div className="w-1/2 border-t border-text"></div>
                <a className="hover:text-text-muted active:text-black active:border-black hover:translate-x-0.5 text-sm md:text-md transition" href="">Book a Ride</a>

        </div>
    </div>
  );
};

export default Navbar;
