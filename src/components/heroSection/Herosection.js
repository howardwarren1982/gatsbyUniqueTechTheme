import React from "react"
import * as style from "./herosectionstyle.module.scss"

import Fadingcarosel from "../carosel/Fadingcarosel"
import Navcomponet from "../NavBar/Navcomponet"

import send from "../../images/send5.png"
import dotLine from "../../images/shape7.png"
import sendPlaneImage from "../../images/send.png"

export default function Herosection() {
  return (
    <div>
      <section class={style.sectionhero}>
        <Navcomponet />
        <div class={style.row}>
          <div class={style.templetehero}>
            <div class={style.herotext}>
              <img
                style={{ position: `absolute`, left: `276px`, bottom: `446px` }}
                src={dotLine}
                alt="doted line"
              />
              <img
                style={{ position: `absolute`, left: `643px`, bottom: `450px` }}
                src={send}
                alt="pointer plane"
              />
              <h1>UNIQUE-TECH</h1>
              <h1>APP DEVELOPMENT</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco. laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit. laborum. Sed ut
                perspiciatis unde omnis iste. natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione. voluptatem sequi.
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <button type="button" name="button">
                View More
                <img
                  style={{ paddingLeft: `5px` }}
                  src={sendPlaneImage}
                  alt="send plane"
                />
              </button>
            </div>
            <div className={style.caroseldiv}>
              <Fadingcarosel />
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  )
}
