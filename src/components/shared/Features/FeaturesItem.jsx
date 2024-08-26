import React from 'react'
import Image from 'next/image';
import style from "./style.module.css";

const FeatureIMG = ({ img, title, description }) => {
  return (
    <div className={`${style.features_image_container}`}>
      <Image
        alt="Background Image"
        src={img}
        width={0}
        height={0}
        sizes="100vw"
      />
      <section>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </section>
    </div>
  )
}

const FeatureIMG_SVG = ({ img, title, description }) => {
  return (
    <div className={`${style.features_image_svg_container}`}>
      <Image
        alt="Background Image"
        src={img}
        width={0}
        height={0}
        sizes="100vw"
      />
      <section>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </section>
    </div>
  )
}

const FeatureIcon = ({ img, title, description }) => {
  return (
    <></>
  )
}

const FeatureText = ({ title, description }) => {
  return (
    <div className={`${style.features_text_container}`}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}



const FeaturesItem = (props) => {
  const componentsSelected = {
    image: <FeatureIMG {...props} />,
    image_svg: <FeatureIMG_SVG {...props} />,
    icon: <FeatureIcon {...props} />,
    text: <FeatureText {...props} />,
  };
  return componentsSelected[props.type] || null;
}

export default FeaturesItem