import React from "react";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import { ElementScroll, TextData } from "@/components/ui";
import { Banner, CTA as CallToAction, Faqs } from "@/components/shared";
import { AboutUs } from "@/components/modules";
import style from "../style.module.css";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await fetchData(`${process.env.NEXT_PUBLIC_API_URL_WEB}/data/page.json`);
  const { header, aboutus, CTA, features, features2, features3, contactus, faqs, subscription, footer } = data;


  return (
    <div className={`${style.main_container}`}>
      <Banner data={header} />

      <article className={`my_container`}>
        <ElementScroll section={'aboutus'} data={aboutus} />
      </article>

      <CallToAction data={CTA} />

      <article className={`my_container`}>
        <ElementScroll section={'products'} data={features} />
        <Faqs data={faqs} />
      </article>

      {/*
      <footer className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt numquam nostrum quia. Saepe praesentium omnis numquam, harum enim sed nisi exercitationem laboriosam dignissimos cumque nobis, vitae quisquam quo aliquid.
      </footer> */}
    </div>
  );
}
