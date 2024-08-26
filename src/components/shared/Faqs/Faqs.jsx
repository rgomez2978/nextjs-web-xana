import React from 'react'
import { FeaturesItem, Title } from '@/components/shared'
import style from "./style.module.css";


const Faqs = ({ data }) => {
  return (
    <section className={`${style.section_faqs}`}>
      <Title
        type="left"
        title={data?.title}
        subtitle={data?.subtitle}
        description={data?.description}
      />

      <div className={`${style.faqs_grid_container}`}>
        {data.items.map((item) => (
          <FeaturesItem key={item.id} type={'text'} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Faqs