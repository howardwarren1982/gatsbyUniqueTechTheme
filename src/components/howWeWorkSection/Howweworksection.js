import React from "react"
import * as style from "./Howwework.module.scss"
import { StaticImage } from "gatsby-plugin-image"

import leftarrow from "../../images/arrowLeft/arrowLeft.png"

export default function Howweworksection() {
  return (
    <section className={style.howwework}>
      <div className="myrow center">
        <span className={style.arrowspan}>
          <img className={style.leftarrow} src={leftarrow} alt="" />
        </span>
        <h3 className={style.wework}>HOW WE WORK</h3>
      </div>
      <div className="myrow center">
        <StaticImage
          src="../../images/VectorSmartObject.png"
          alt="people working together, getting things done"
          className="weworkimg"
        />
      </div>
    </section>
  )
}
