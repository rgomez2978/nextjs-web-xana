import React from 'react'
import style from "./style.module.css";


const CTAText = ({ data }) => {
  return (
    <section className={`${style.section_cta}`}>
      <h3 dangerouslySetInnerHTML={{ __html: data.subtitle }} />
    </section>
  )
}

const CTASubscribe = ({ data }) => {
  return (
    <>CTASubscribe</>
  )
}


const CTA = (props) => {
  const componentsSelected = {
    text: <CTAText {...props} />,
    subscribe: <CTASubscribe {...props} />,
  };
  return componentsSelected[props.section] || null;
}

export default CTA