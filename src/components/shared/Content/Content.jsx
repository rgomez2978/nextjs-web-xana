import React from 'react'
import { Tabs, Features, FeaturesItem, Title } from '@/components/shared';
import style from "./style.module.css";


const ContentAboutUs = ({ data }) => {
  return (
    <div className={`${style.section_content}`}>
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

const ContentAboutUs2 = ({ data }) => {
  return (
    <section className={`${style.section_content}`}>
      <Title
        type="big"
        title={data?.title}
        subtitle={data?.subtitle}
        description={data?.description}
      />
      <Features type={'image'} data={data?.items} />
    </section>
  )
}

const ContentServices = ({ data }) => {
  return (
    <>ContentServices</>
  )
}

const ContentContactUS = ({ data }) => {
  return (
    <section className={`${style.section_content} `}>
      <Title
        type="normal"
        subtitle={data?.subtitle}
        description={data?.description}
      />
      <Tabs data={data} />
    </section>
  )
}

const ContentProducts = ({ data }) => {
  return (
    <section className={`${style.section_content}`}>
      <Title
        type="big"
        title={data?.title}
        subtitle={data?.subtitle}
        description={data?.description}
      />
      <Features type={'image_svg'} data={data?.items} />
    </section>
  )
}


const ContentFaqs = ({ data }) => {
  return (
    <section className={`${style.section_content_faqs}`}>
      <Title
        type="left"
        title={data?.title}
        subtitle={data?.subtitle}
        description={data?.description}
      />
      <div className={`${style.faqs_grid_container}`}>
        {data.items.map((item) => (
          <FeaturesItem key={item.id} type={'text'} {...item} />
        ))}
      </div>
    </section>
  )
}

const Content = (props) => {
  const componentsSelected = {
    aboutus: <ContentAboutUs {...props} />,
    services: <ContentServices {...props} />,
    products: <ContentProducts {...props} />,
    faqs: <ContentFaqs {...props} />,
    contactus: <ContentContactUS {...props} />,
  };
  return componentsSelected[props.section] || null;

}

export default Content