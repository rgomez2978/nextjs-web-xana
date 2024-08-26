import Image from 'next/image'
import React from 'react'
import style from "./style.module.css";
import Link from 'next/link';

const FooterItem = (props) => {

  return (
    <div className={`${style.li_options}`}>
      <Link href={props?.link}>
        <Image
          alt="icon"
          src={props?.img}
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
    </div>
  )
}

export default FooterItem