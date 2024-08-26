import React from 'react'
import { FeaturesItem } from '@/components/shared';
import style from "./style.module.css";

const Features = ({ data, type }) => {
  return (
    <>
      {data && (
        <div className={`${style.section_features}`}>
          {data.map((item, idx) => (
            <FeaturesItem key={item.id} idx={idx} type={type} {...item} />
          ))}
        </div>

      )}
    </>
  )
}

export default Features