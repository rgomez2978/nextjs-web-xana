import React from 'react'
import style from "./style.module.css";


const TitleNormal = ({ title, subtitle, description }) => {
  return (
    <h2 className={`${style.title_normal}`} dangerouslySetInnerHTML={{ __html: title }} />
  )
}

const TitleBig = ({ title, subtitle, description }) => {
  return (
    <header className={`${style.title_big}`}>
      <span dangerouslySetInnerHTML={{ __html: title }} />
      <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </header>
  )
}

const TitleLeft = ({ title, subtitle, description }) => {
  return (
    <header className={`${style.title_text_left}`}>
      <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </header>
  )
}



const Title = (props) => {
  const componentsSelected = {
    normal: <TitleNormal {...props} />,
    big: <TitleBig {...props} />,
    left: <TitleLeft {...props} />,
  };
  return componentsSelected[props.type] || null;

}

export default Title

