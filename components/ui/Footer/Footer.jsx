import React from 'react'
import { fetchData } from '@/utils/fetchData';
import { FooterItem } from '@/components/ui';
import style from "./style.module.css";

const Footer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await fetchData(`http://localhost:3000/data/footer.json`);

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

export default Footer