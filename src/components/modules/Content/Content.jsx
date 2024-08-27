import React from 'react'
import { Features, Title } from '@/components/shared';
import style from "./style.module.css";

const Content = ({ data }) => {
  return (
    <div className={`${style.section_content_features}`}>
      <Title
        type="normal"
        title={data?.title}
        subtitle={data?.subtitle}
        description={data?.description}
      />
      <Features type={'content'} data={data?.items} />
    </div>
  )
}

export default Content