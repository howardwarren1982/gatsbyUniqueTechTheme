import React from "react"
import * as style from "./ourfeatures.module.scss"

import bag from "../../images/bag45.png"
import notebook from "../../images/notebook79.png"
import pencil from "../../images/pencil124.png"
import wallet from "../../images/wallet35.png"
import glode from "../../images/globe32.png"
import hand from "../../images/hand224.png"
import cropping from "../../images/cropping4.png"
import wealth from "../../images/wealth.png"
import soft from "../../images/soft4.png"

import rightArrow from "../../images/arrowRight/arrowRight.png"

export default function OurfeaturesSection() {
  return (
    <section class={style.ourfeatures}>
      <div class="myrow center">
        <h3 class={style.ourfeaturehead}>OUR FEATURES</h3>
        <span class={style.arrowspan}>
          <img class={style.rightarrow} src={rightArrow} alt="" />
        </span>
      </div>
      <div class={`flex myrow ${style.featurestemplete} center`}>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={bag} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={notebook} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={pencil} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={wallet} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={glode} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={hand} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={cropping} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={wealth} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={bag} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={soft} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={hand} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class={style.featurecard}>
            <img src={bag} alt="paper with writing" />
            <div>
              <h6 class={style.cardheading}>Visual Composer</h6>
              <p class={style.cardtext}>
                TheFox comes with the Visual Composer Plugin. You won’t need to
                code or to remember any shortcodes with our. Theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
