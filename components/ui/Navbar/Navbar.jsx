'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import style from "./style.module.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);


  return (
    <header className={`fixed w-full lg:px-16 px-4 bg-white flex flex-wrap items-center py-2 shadow-md ${scrollActive ? ' shadow-md pt-0' : ' pt-4'}`}>
      <div className="flex items-center justify-between flex-1">
        <Image
          alt="Background Image"
          src={'images/logo_xana.svg'}
          width={100}
          height={20}
          sizes="100vw 100vh"
        />
      </div>

      <label for="menu-toggle" className="block pointer-cursor md:hidden">
        <svg className="text-gray-900 fill-current"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <nav>
          <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
            <li>
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  `block px-0 py-3 md:p-4 animation-hover cursor-pointer relative
                  ${activeLink === 'about' ? ' text-orange-500 animation-active ' : ' text-black-500 hover:text-orange-500'}
                `}
              >
                About
              </LinkScroll>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
