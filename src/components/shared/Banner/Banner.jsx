import React from 'react'
import Image from 'next/image'
import style from "./style.module.css";

const Banner = ({ data }) => {
  return (
    <section className={`${style.section_banner_container}`} >
      <figure className={`${style.banner_image}`}>
        <Image
          alt="Background Image"
          src={data.img}
          width={0}
          height={0}
          sizes="100vw"
          className={`${style.img_banner}`}
        />
      </figure>

      <div className={`${style.banner_text} `} >
        <div className={`${style.banner_text_container} `} >
          <header>
            <h1 className='hidden md:flex' dangerouslySetInnerHTML={{ __html: data.title }} />
            <h1 className='flex md:hidden' dangerouslySetInnerHTML={{ __html: data.subtitle }} />
          </header>
        </div>
      </div>
    </section>
  )
}

export default Banner