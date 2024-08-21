import React from 'react'
import Image from 'next/image'
import style from "./style.module.css";


const Banner = ({ data }) => {

  console.log('data', data)

  return (
    <section className={`${style.section_banner_container}`} >
      {/* Banner - Background */}
      <figure>
        <Image
          alt="Background Image"
          src={data?.img}
          width={0}
          height={0}
          sizes="100vw"
        />
      </figure>

      {/* Banner - Content */}
      <div className={`${style.banner_text}`} >
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: data?.title }} />
          {/* <p dangerouslySetInnerHTML={{ __html: data?.description }} /> */}
        </header>
        {/* <footer>
          {data.links.map((item) => (
            <button key={item.id}> {item.title}</button>
          ))}
        </footer> */}
      </div>
    </section>
  )
}

export default Banner