import React from "react";
import { Features, Title } from "@/components/shared";
import style from "./style.module.css";

const AboutUs = ({ data }) => {
  return (
    <section className={`${style.section_aboutus}`}>
      <Title type="normal" subtitle={data?.subtitle} />
      <Features type={'image'} data={data?.items} />
    </section>
  )
}
export default AboutUs