'use client'
import React from 'react'
import { Content } from '@/components/shared';
import { Element as Scroll } from "react-scroll";

const ElementScroll = ({ data, section }) => {
  return (
    <Scroll name={section}>
      <section className="w-full" >
        <Content data={data} section={section} />
      </section>
    </Scroll>
  )
}

export default ElementScroll