'use client'
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import style from "./style.module.css";

const NavbarItem = (props) => {
  const [activeLink, setActiveLink] = useState(null);

  const activeLinkColor = activeLink === props.section ? ' text-xana-purple animation-active ' : ' text-xana-txt-text hover:text-xana-purple';

  return (
    <LinkScroll
      activeClass="active"
      to={props.section}
      spy={true}
      smooth={true}
      offset={-60}
      duration={800}
      onSetActive={() => {
        setActiveLink(props.section);
      }}
      className={`${style.li_options} ${activeLinkColor} `}
    >
      {props.title}
    </LinkScroll>
  )
}

export default NavbarItem