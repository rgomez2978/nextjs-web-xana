'use client'
import { useEffect, useState } from 'react'
import Image from "next/image";
import { NavbarItem } from '@/components/ui';
import { fetchData } from "@/utils/fetchData";
import style from "./style.module.css";

const Navbar = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL_WEB}/data/menu.json`)
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    })
  }, [])




  if (data && Object.keys(data).length > 0) {
    return (
      <header className={`${style.section_header_nav} `}>
        <div className={`${style.header_nav_container}  `}>

          <div className={`${style.header_nav_logo}`}>
            <Image
              alt="logo"
              src={`${process.env.NEXT_PUBLIC_RUTA_IMG}/logos/logo_xana.svg`}
              width={0}
              height={0}
              sizes="100vw"
              className={`${style.img_logo}`}
            />
          </div>

          <svg className={`${style.header_nav_icon_menu}`}
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>

          <nav className={`${style.header_nav_options_container} `}>
            <ul>
              {data?.items.map((item) => (
                <li key={item.id} >
                  <NavbarItem  {...item} />
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>
    );
  }
};

export default Navbar;
