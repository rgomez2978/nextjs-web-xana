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

const FeatureContent = ({ idx, img, title, description, buttons }) => {

  return (
    <>

      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 my_border ">

        <div className="text-left max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 my_border">
          <div className="mt-6 my_border">
            <h2 className=" mb-2 text-xl md:text-lg xl:text-xl font-bold text-xana-txt-title opacity-80;">
              {title}
            </h2>
            <p className="text-base md:text-sm lg:text-base font-normal text-xana-txt-text opacity-70;">
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
        <div className="mt-12 sm:mt-16 lg:mt-0 my_border items-center justify-center flex">
          <div className="h-auto md:h-[180px] lg:h-[190px] xl:h-[200px] 2xl:h-[300px] opacity-90 w-full my_border">

            <Image
              alt="Background Image"
              src={img}
              width={0}
              height={0}
              sizes="100vw"
              className={`w-auto h-auto md:h-[180px] lg:h-[190px] xl:h-[250px] 2xl:h-[300px] opacity-90`}
            />

            {/* <img loading="lazy" width="647" height="486"
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color:transparent" src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" /> */}
          </div>
        </div>
      </div>

    </>
  )

}


const FeaturesItem = (props) => {
  const componentsSelected = {
    image: <FeatureIMG {...props} />,
    image_svg: <FeatureIMG_SVG {...props} />,
    icon: <FeatureIcon {...props} />,
    text: <FeatureText {...props} />,
    content: <FeatureContent {...props} />,
  };
  return componentsSelected[props.type] || null;
}

export default FeaturesItem