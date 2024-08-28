'use client'
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import style from "./style.module.css";

const NavbarItem = (props) => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <LinkScroll
      activeClass={`${style.li_active}`}
      to={props.section}
      spy={true}
      smooth={true}
      offset={-40}
      duration={800}
      className={`${style.li_options} `}
    >
      {props.title}
    </LinkScroll>
  )
}

export default NavbarItem