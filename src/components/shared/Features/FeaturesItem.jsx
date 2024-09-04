import React from 'react'
import Image from 'next/image';
import style from "./style.module.css";

const FeatureIMG = ({ img, title, description }) => {
  return (
    <div className={`${style.features_container}`}>
      <Image
        alt="Background Image"
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        className={`${style.img_image_container}`}
      />
      <section>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </section>
    </div>
  )
}

const FeatureICON_SVG = ({ img, title, description }) => {
  return (
    <div className={`${style.features_container}`}>
      <Image
        alt="Background Image"
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        className={`${style.img_icon_svg_container}`}
      />
      <section>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
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
    <div className={`${style.section_features_faqs}`}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}


const FeatureTextMap = ({ title, address, schedule, phoneNumbers, location }) => {
  return (
    <div className={`${style.section_address_map} `}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />

      <div className={`${style.section_address_text}`}>
        <p dangerouslySetInnerHTML={{ __html: address }} />
        <p dangerouslySetInnerHTML={{ __html: schedule }} />

        <div className={`${style.phone_container}`}>
          {phoneNumbers.map((phone) => (
            <span
              key={phone.id}
              className={`${style.span_phone}`}
              dangerouslySetInnerHTML={{ __html: phone.number }}
            />
          ))}
        </div>

      </div>

      <button className={`${style.button_container}`}>
        <span dangerouslySetInnerHTML={{ __html: location?.title }} />
        <div dangerouslySetInnerHTML={{ __html: location?.icon }} />
      </button>
    </div>
  )
}


const FeatureContent = ({ idx, id, img, title, description, buttons }) => {
  let par = idx % 2 === 0;

  console.log('fiFeatureContentrst', idx, id, img, title, description, buttons)

  return (
    <div className={`${style.section_features_content}`}>
      <div className={`${style.text_feature_content} ${par ? '' : 'md:col-start-2'}`}>
        <div className={`${style.text_feature_content_container}`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={`${style.image_feature_content}`}>
        <figure className={` ${par ? 'md:pr-10 md:ml-5 lg:-ml-5' : 'md:pl-10 md:mr-5 lg:-mr-5 '}`}>
          <Image
            alt="feature Image"
            src={img}
            width={0}
            height={0}
            sizes="100vw"
          />
        </figure>
      </div>
    </div>
  )

}


const FeaturesItem = (props) => {
  const componentsSelected = {
    image: <FeatureIMG {...props} />,
    image_svg: <FeatureICON_SVG {...props} />,
    icon: <FeatureIcon {...props} />,
    text: <FeatureText {...props} />,
    text_map: <FeatureTextMap {...props} />,
    content: <FeatureContent {...props} />,
  };
  return componentsSelected[props.type] || null;
}

export default FeaturesItem