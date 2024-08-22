'use client'
import React from 'react'
import { AboutUs, Products } from '@/components/modules';
import { Element as Scroll } from "react-scroll";

const ElementScroll = ({ data, section }) => {
  const SelectComponent = () => {
    const componentsMap = {
      aboutus: <AboutUs data={data} />,
      products: <Products data={data} />,
      contactus: <AboutUs data={data} />,
      blog: <AboutUs data={data} />,
    };
    return componentsMap[section] || null;
  }

  return (
    <Scroll name={section}>
      <section className="w-full" >
        <SelectComponent />
      </section>
    </Scroll>
  )
}

export default ElementScroll