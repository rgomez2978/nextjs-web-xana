'use client'
import { useEffect, useState } from 'react'
import { fetchData } from '@/utils/fetchData';
import { FooterItem } from '@/components/ui';
import style from "./style.module.css";

const Footer = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    return fetchData(`${process.env.NEXT_PUBLIC_API_URL_WEB}/data/footer.json`)
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    })
  }, [])


  if (data && Object.keys(data).length > 0) {
    return (
      <section className={`${style.section_footer}`}>

        <div className={`${style.footer_container} my_container`}>
          <ul>
            {data?.socials.map((item) => (
              <li key={item.id}>
                <FooterItem {...item} />
              </li>
            ))}
          </ul>

          {/* <div> logo </div> */}

          <p dangerouslySetInnerHTML={{ __html: data?.copy }} />
        </div>



      </section>
    )
  }
}

export default Footer