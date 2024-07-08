"use client";
import Link from "next/link";
import React, { useState,useEffect} from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import {domMax} from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hide = () =>{
    try{if(!navbarOpen){
          if(document.getElementById("nav_bar") != null) document.getElementById("nav_bar").style.backgroundColor="transparent"}
    }
    catch(error){}
  }
  const unhide = () =>{
    try{if(!navbarOpen)
          if(document.getElementById("nav_bar") != null) document.getElementById("nav_bar").style.backgroundColor="#121212"}
    catch(error){}
  }

  return (
    <nav id={"nav_bar"} className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-0">
      <div className="flex container lg:py-7 flex-wrap items-center justify-between mx-auto px-4 py-7">
        {scrollY > 100
            ? unhide()
            : hide()
        }
        <div>
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
              src="/images/logo.png"
              alt="logo image"
              id={"logo_img"}
              className="absolute transform -translate-x-1 -translate-y-1/2 top max-h-16"
              width={766}
              height={229}
              style={{ width: 'auto', height: '100%'}}
          />
        </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {setNavbarOpen(true); document.getElementById("logo_img").style.display="block";
                document.getElementById("nav_bar") != null? document.getElementById("nav_bar").style.backgroundColor="#121212":""}}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {setNavbarOpen(false); document.getElementById("logo_img").style.display="block";
                document.getElementById("nav_bar") != null? document.getElementById("nav_bar").style.backgroundColor="transparent":""}}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>

  );
};

export default Navbar;
