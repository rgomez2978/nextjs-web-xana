import React from "react";
import { Features, Title } from "@/components/shared";
import style from "./style.module.css";

const Products = ({ data }) => {
  return (
    <section className={`${style.section_products}`}>
      <Title
        type="big"
        title={data?.title}
        subtitle={data?.subtitle}
        description={data?.description}
      />
      <Features type={'image_svg'} data={data?.items} />
    </section>
  )
}
export default Products