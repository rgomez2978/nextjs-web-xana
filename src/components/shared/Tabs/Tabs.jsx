import React, { useState, useEffect } from 'react'
import { TabsItem } from '@/components/shared'
import style from "./style.module.css";



const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(null)

  const handleTab = (tab) => {
    setActiveTab(`tab${tab.id}`)
  }

  useEffect(() => {
    setActiveTab('tab1')
  }, [])


  return (
    <section>
      {/* Tab Buttons */}
      <nav className={`${style.section_tabs}`}>
        <ul>
          {data.states.map((item, idx) => (
            <li key={item.id}
              className={`${activeTab === `tab${item.id}`
                ? 'border-b-2 !font-medium border-b-xana-txt-text-tab-border  text-xana-blue py-1 -mb-[2px] '
                : ' text-xana-txt-text-tab'}}`}
              onClick={() => handleTab(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      {/* Tab Buttons */}
      {data.states.map((tab, idx) => (
        <TabsItem key={tab.id} idx={idx} {...tab} active={activeTab} />
      ))}
    </section >
  )
}

export default Tabs