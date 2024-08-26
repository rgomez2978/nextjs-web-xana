/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from "./style.module.css";
import { Features, Title } from '@/components/shared';

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

      {/* <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">

          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">


              <div className="mt-6">
              </div>
          </div>


          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img loading="lazy" width="647" height="486"
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color:transparent" src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" />
            </div>
          </div>
        </div>
      </div> */}



      {/* <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">

            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">


              <div className="mt-6">
              </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color:transparent" src="https://images.unsplash.com/photo-1599134842279-fe807d23316e" />
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Content