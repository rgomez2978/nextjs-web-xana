import React from 'react'
import Image from 'next/image'
import style from "./style.module.css";
import { FeaturesItem } from '@/components/shared';


const TabsItem = ({ idx, id, name, img, clients, active }) => {
  return (
    <div
      id={`tab${id}`}
      className={`${style.section_tabs_content}  ${active === `tab${id}` ? 'flex' : 'hidden'}`}
    >
      <figure>
        <Image
          alt="Background Image"
          src={img}
          width={0}
          height={0}
          sizes="100vw"
        />
      </figure>

      <div className={`${style.section_text_address}`}>
        <div className={`${style.address_grid_container} `}>
          {clients.map((item) => (
            <FeaturesItem key={item.id} type={'text_map'} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TabsItem