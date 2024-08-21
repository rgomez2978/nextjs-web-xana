'use client'
import React from 'react'
import { AboutUs } from '@/components/modules';
import { Element as Scroll } from "react-scroll";

const ElementScroll = ({ data, section }) => {

  const SelectComponent = () => {
    let Comp;
    switch (section) {
      case 'aboutus':
        Comp = <AboutUs data={data} />
        break;
      case 'products':

        break;
      case 'con':

        break;
      case 'contactus':

        break;

      case 'blog':

        break;

      default:
        break;
    }
    return Comp
  }


  return (
    <Scroll name={section}>
      <section className="w-auto my_border" >
        <SelectComponent />
      </section>
    </Scroll>
  )
}

export default ElementScroll