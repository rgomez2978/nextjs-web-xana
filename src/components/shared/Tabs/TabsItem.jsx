'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import style from "./style.module.css";
import { FeaturesItem } from '@/components/shared';
import { SVGArrowDown } from '@/components/svg';


const TabsItem = ({ idx, id, name, img, clients, active }) => {

  const [featureText, setFeatureText] = useState(clients.slice(0, 3))
  const [hasNextPage, setHasNextPage] = useState(true)
  const [page, setPage] = useState(1)

  const loadMoreFeatureText = () => {
    const startIndex = page * 3
    const endIndex = startIndex + 3
    const newFeatureText = clients.slice(startIndex, endIndex)

    if (newFeatureText.length === 0) {
      setHasNextPage(false)
    } else {
      setFeatureText([...featureText, ...newFeatureText])
      setPage(page + 1)
    }

    // console.log('newFeatureText.length', newFeatureText.length)
  }


  useEffect(() => {
    if (clients.length < 3) {
      setHasNextPage(false)
    }
  }, [])



  // console.log('first', first)
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
          {featureText.map((item) => (
            <FeaturesItem key={item.id} type={'text_map'} {...item} />
          ))}
        </div>
        {hasNextPage && (
          <button onClick={loadMoreFeatureText} className={`${style.button_container}`}>
            <span dangerouslySetInnerHTML={{ __html: 'Ver todas las tiendas' }} />
            <SVGArrowDown className={``} />
          </button>
        )}
      </div>
    </div >
  )
}

export default TabsItem