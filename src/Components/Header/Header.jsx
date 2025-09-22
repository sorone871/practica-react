import React from "react";
import { useState } from "react";
import {Menu, X} from "lucide-react"
import Boton from "../Botones/Boton";
import Links from "../Links/Links";
const Header = () =>{

const [open, setOpen] = useState(false);
    return(
        <header className="relative z-10 flex justify-around h-[5rem] items-center bg-[#FAFAFA]  ">
            <div className="Logo">
                <a href="/">
                    
                 <img src="/practica-react/images/logo-dark.svg" alt="Logo" />
                </a>
            </div>
            <nav>
                <ul className="hidden md:flex gap-8 text-[#9C9BA1]">
                    <li><Links href="/">Home</Links></li>
                    <li><Links href="/">About</Links></li>
                    <li><Links href="/">Contact</Links></li>
                    <li><Links href="/">Blog</Links></li>
                    <li><Links href="/">Carers</Links></li>
                
                </ul>
            </nav>

            
            <div className="hidden md:block">

            <Boton 
            text="Request Invite"
            
            />
            </div>

            {/* menu boton */}
            <button
            className="md:hidden text-[#2E3049]"
            onClick={() => setOpen(!open)}>
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>
            {/* MENÚ MÓVIL */}
            {open && (
                <div className="absolute top-[5rem] left-0 w-full bg-white shadow-lg md:hidden">
                <nav className="flex flex-col items-center gap-6 py-6 text-[#2E3049] font-medium">
                    <Links href="/" onClick={() => setOpen(false)}>Home</Links>
                    <Links href="/" onClick={() => setOpen(false)}>About</Links>
                    <Links href="/" onClick={() => setOpen(false)}>Contact</Links>
                    <Links href="/" onClick={() => setOpen(false)}>Blog</Links>
                    <Links href="/" onClick={() => setOpen(false)}>Careers</Links>
                    
                </nav>
                </div>
            )}
        </header>
    )
}

export default Header;