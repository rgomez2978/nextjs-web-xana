/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FeaturesItem, Skeleton } from '@/components/shared';
import { SVGArrowDown, SVGArrowUp } from '@/components/svg';
import style from "./style.module.css";


const TabsItem = ({ id, img, clients, active }) => {
  const [featureText, setFeatureText] = useState(clients.slice(0, 3))
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const startIndex = page * 3
  const showItems = clients.length - startIndex
  const endIndex = startIndex + showItems
  const [moreFeatureText, setMoreFeatureText] = useState(clients.slice(startIndex, endIndex))

  const loadMoreFeatureText = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setMoreFeatureText(clients.slice(startIndex, endIndex))

    if (featureText.length === clients.length) {
      return
    } else {
      setFeatureText([...featureText, ...moreFeatureText])
      setPage(page + 1)
    }
    setIsLoading(false)
  }

  const seeLessFeatureText = async () => {
    setFeatureText(clients.slice(0, 3))
    setPage(1)
    setIsLoading(false)
  }


  useEffect(() => {
    setFeatureText(clients.slice(0, 3))
    setPage(1)
    setIsLoading(false)
  }, [active])


  console.table({
    "active tab": active,
    "isLoading": isLoading,
    "total_clients": clients.length,
    "Primeros registros": featureText.length,
  })



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

        <div className={`${style.address_grid_container} `}>
          <Skeleton type={'store'} visible={isLoading} />
        </div>

        <button onClick={featureText.length !== clients.length
          ? loadMoreFeatureText
          : seeLessFeatureText}
          className={`${style.button_container}`}>
          <span dangerouslySetInnerHTML={{ __html: featureText.length !== clients.length ? 'Ver todas las tiendas' : 'Ver menos' }} />

          {featureText.length !== clients.length ? <SVGArrowDown /> : <SVGArrowUp />}
        </button>
      </div>
    </div >
  )
}

export default TabsItem