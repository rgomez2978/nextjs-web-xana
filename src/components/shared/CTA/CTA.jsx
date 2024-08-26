import React from 'react'
import style from "./style.module.css";

const CTA = ({ data }) => {
  return (
    <section className={`${style.section_cta}`}>
      <h3 dangerouslySetInnerHTML={{ __html: data.subtitle }} />
    </section>
  )
}

export default CTA