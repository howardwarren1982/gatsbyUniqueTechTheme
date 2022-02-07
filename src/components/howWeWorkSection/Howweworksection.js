import React from "react"
import * as style from "./Howwework.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Howweworksection() {
  return (
    <section class={style.howwework}>
      <div class="myrow center">
        <span class="arrowspan">
          <img
            class={style.leftarrow}
            src="../../images/arrowLeft/arrowLeft.png"
            alt=""
          />
        </span>
        <h3 class={style.wework}>HOW WE WORK</h3>
      </div>
      <div class="myrow center">
        <StaticImage
          src="../../images/VectorSmartObject.png"
          alt="people working together, getting things done"
          class="weworkimg"
        />
      </div>
    </section>
  )
}
