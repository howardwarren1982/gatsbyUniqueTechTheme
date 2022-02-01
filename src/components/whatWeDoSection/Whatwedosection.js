import React from "react"
import * as style from "./whatwedosection.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Whatwedosection() {
  return (
    <section className={style.sectionwhatwedo}>
      <div className={`${style.row} ${style.center}`}>
        <h3>WHAT WE DO</h3>
        <span className="arrowspan">
          <img
            className="rightarrow"
            src="./resources/css/img/arrowRight/arrowRight.png"
            alt=""
          />
        </span>
      </div>

      <div className={style.row}>
        <div className={`${style.templetewebdesign} flexrevcol`}>
          <div className={style.whatwedotext}>
            <h5>SEARCH ENGINE OPTIMIZATION</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est. laborum.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsamvoluptatem voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni.
              dolores. eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <button
              className={`${style.btnprimary} ${style.btnmidsize}`}
              type="button"
              name="button"
            >
              VIEW MORE
            </button>
          </div>

          <div className={style.whatwedopic}>
            <StaticImage
              src="../../images/laptopPhone.png"
              width={650}
              alt="Design pic"
            />
          </div>
        </div>

        <div className={`${style.seo} flexrevcol`}>
          <div className={style.whatwedotext}>
            <h5>SEARCH ENGINE OPTIMIZATION</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est. laborum.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsamvoluptatem voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni.
              dolores. eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <button
              className="btnprimary btnmidsize"
              type="button"
              name="button"
            >
              VIEW MORE
            </button>
          </div>

          <div className={style.whatwedopic}>
            <StaticImage
              src="../../images/laptopPhone.png"
              width={650}
              alt="Design pic"
            />
          </div>
        </div>

        <div className={`${style.marketting} flexrevcol`}>
          <div className={style.whatwedotext}>
            <h5>SEARCH ENGINE OPTIMIZATION</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est. laborum.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsamvoluptatem voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni.
              dolores. eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <button
              className="btnprimary btnmidsize"
              type="button"
              name="button"
            >
              VIEW MORE
            </button>
          </div>

          <div className={style.whatwedopic}>
            <StaticImage
              src="../../images/laptopPhone.png"
              width={650}
              alt="Design pic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
