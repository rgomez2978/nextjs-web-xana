'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { fetchData } from "@/utils/fetchData";
import style from "./style.module.css";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [dataFetch, setDataFetch] = useState([])

  const getData = async () => {
    try {
      const response = await fetchData(`http://localhost:3000/data/menu.json`);
      setDataFetch(response.items)
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  useEffect(() => {
    getData();
    // window.addEventListener("scroll", () => {
    //   setScrollActive(window.scrollY > 40);
    // });

  }, []);



  return (
    <>
      {dataFetch && (

        <header className={`fixed z-30 w-full bg-white flex flex-wrap items-center py-2 shadow-md`}>

          <div className="container flex flex-row px-10 mx-auto">

            <div className="flex items-center justify-between flex-1">
              <Image
                alt="Background Image"
                src={'images/logo_xana.svg'}
                width={80}
                height={20}
                sizes="100vw 100vh"
              />
            </div>

            <svg className="block text-gray-900 fill-current pointer-cursor md:hidden"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>

            <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
              <nav>
                <ul className="items-center justify-between pt-4 text-sm text-gray-700 md:flex md:pt-0">
                  {dataFetch.map((item) => (
                    <li key={item.id}>
                      <LinkScroll
                        activeClass="active"
                        to={item.section}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={800}
                        onSetActive={() => {
                          setActiveLink(item.section);
                        }}
                        className={`block px-0 py-3 md:p-4 animation-hover cursor-pointer font-medium ${activeLink === item.section ? ' text-xana-purple animation-active ' : ' text-xana-txt-text hover:text-xana-purple'} `}
                      >
                        {item.title}
                      </LinkScroll>
                    </li>
                  ))}

                </ul>
              </nav>
            </div>
          </div>

        </header>
      )}
    </>
  );
};

export default Navbar;
