import React from "react";
import { TextData } from '@/components/ui'
import Image from "next/image";

const AboutUs = ({ data }) => {

  if (data && data !== undefined) {
    return (
      <section class="text-center py-8 my_border">
        <h2 class="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal text-gray-800 mb-8">{data?.title}</h2>

        <div class="flex flex-wrap">
          {data?.items.map((item) => (
            <div key={item.id} class="flex flex-col justify-center items-center p-4 w-full md:w-1/3  my_border">
              <Image
                alt="imagen 1"
                src={item.img}
                quality={100}
                width={250}
                height={100}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <h3 class="text-xl font-bold text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: item?.title }} />

              <p class="font-normal text-base text-gray-600" dangerouslySetInnerHTML={{ __html: item?.description }} />

            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default AboutUs