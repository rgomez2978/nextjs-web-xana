import React from 'react'
import Image from 'next/image'
import style from "./style.module.css";

const Banner = ({ data }) => {
  return (
    <section className={`${style.section_banner_container}`} >
      <figure>
        <Image
          alt="Background Image"
          src={data?.img}
          width={0}
          height={0}
          sizes="100vw"
        />
      </figure>

      <div className={`${style.banner_text}`} >
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: data?.title }} />
        </header>
      </div>
    </section>
  )
}

export default Banner