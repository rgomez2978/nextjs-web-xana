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
      <section className={`${style.section_address_text}`}>
        <p dangerouslySetInnerHTML={{ __html: address }} />
        <p dangerouslySetInnerHTML={{ __html: schedule }} />
        <div className={`${style.phone_container}`}>
          {phoneNumbers.map((phone) => (
            <span key={phone.id} dangerouslySetInnerHTML={{ __html: phone.number }} />
          ))}
        </div>
      </section>
      <button className={`${style.button_container}`}>
        <span dangerouslySetInnerHTML={{ __html: location?.title }} />
        <div dangerouslySetInnerHTML={{ __html: location?.icon }} />
      </button>
    </div>
  )
}


const FeatureContent = ({ idx, img, title, description, buttons }) => {

  let par = idx % 2 === 0;

  return (
    <div className={`mx-auto md:grid max-w-7xl md:grid-flow-col-dense md:grid-cols-2 mt-10 md:mt-0  lg:gap-24 md:px-2 lg:px-8  `}>
      <div className={`mx-auto max-w-xl px-8 lg:mx-0 md:max-w-none py-0 md:py-16 md:px-0  ${par ? '' : 'md:col-start-2'}  `}>
        <div className="text-left md:mt-6">
          <h2 className="mb-2 text-xl font-bold md:text-lg xl:text-xl text-xana-txt-title opacity-80">
            {title}
          </h2>
          <p className="text-base font-normal md:text-sm lg:text-base text-xana-txt-text opacity-70">
            {description}
          </p>
          {/* <div className="mt-6">
                  <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-xana-txt-title shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    href="/login">
                    Learn More
                  </a>
                </div> */}
        </div>
      </div>
      <div className="flex items-center justify-center mt-0 lg:mt-0 ">
        <div className={`flex items-center justify-center h-auto md:h-[230px] lg:h-[290px] xl:h-[250px] 2xl:h-[300px] opacity-90 w-full  ${par ? 'md:pr-10 md:-ml-5' : 'md:pl-10 md:-mr-5 '}`}>
          <Image
            alt="Background Image"
            src={img}
            width={0}
            height={0}
            sizes="100vw"
            className={`w-auto md:w-full h-[250px] md:h-[230px] lg:h-[290px] xl:h-[250px] 2xl:h-[300px] opacity-90`}
          />
        </div>
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