'use client'
import { useEffect, useState, useRef } from 'react'
import { fetchData } from "@/utils/fetchData";
import { ElementScroll, TextData } from "@/components/ui";
import { Banner, CTA as CallToAction, Faqs } from "@/components/shared";

import UAParser from 'ua-parser-js';

import style from "./style.module.css";
import NotFound from './not-found';

export default function Home() {
  const [data, setData] = useState([])
  const parser = new UAParser();
  const getDevice = parser.getResult();



  const getData = async () => {
    return (getDevice.device.type === undefined || getDevice.device.type === 'desktop') || getDevice.cpu.architecture === 'undefined' ? fetchData(`${process.env.NEXT_PUBLIC_API_URL_WEB}/data/page.json`) : fetchData(`${process.env.NEXT_PUBLIC_API_URL_WEB_MOBILE}/data/page.json`)
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    })
  }, [])



  if (data && Object.keys(data).length > 0) {
    const { header, aboutus, CTA, features, features2, features3, contactus, faqs, subscription, footer } = data;
    return (
      <div className={`${style.main_container}`}>
        <Banner data={header} />
        <article className={`my_container`}>
          {/* <ElementScroll section={'aboutus'} data={aboutus} /> */}
          {/* <ElementScroll section={'aboutus2'} data={aboutus} /> */}
          {/* <ElementScroll section={'products'} data={features} /> */}
          {/* <ElementScroll section={'faqs'} data={faqs} /> */}
        </article>
        {/* <CallToAction section={'text'} data={CTA} /> */}

        <article className={`my_container`}>
          <ElementScroll section={'contactus'} data={contactus} />
        </article>
        {/* <CallToAction section={'subscribe'} data={CTA} /> */}

      </div >
    );
  }
}
