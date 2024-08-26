import React from 'react'
import { FeaturesItem } from '@/components/shared';
import style from "./style.module.css";

const Features = ({ data, type }) => {
  return (
    <div className={`${style.section_features}`}>
      {data.map((item) => (
        <FeaturesItem key={item.id} type={type} {...item} />
      ))}
    </div>
  )
}

export default Features