import React from "react";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import { ElementScroll, TextData } from "@/components/ui";
import { Banner } from "@/components/shared";
import { AboutUs } from "@/components/modules";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await fetchData(`http://localhost:3000/data/page.json`);
  const { header, aboutus, CTA, features, features2, features3, contactus, faqs, subscription, footer } = data;


  return (
    <main className="flex flex-col items-center justify-between min-h-screen mx-auto ">

      <Banner data={header} />
      <article className="w-full mx-auto my_border my_container">
        <ElementScroll section={'aboutus'} data={aboutus} />

      </article>


      {/*
      <footer className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex my_border">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt numquam nostrum quia. Saepe praesentium omnis numquam, harum enim sed nisi exercitationem laboriosam dignissimos cumque nobis, vitae quisquam quo aliquid.
      </footer> */}
    </main>
  );
}
