import React from "react"
import * as styles from "./Navcomponet.module.scss"

export default function Navcomponet() {
  return (
    <div>
      <nav>
        <div className={styles.logoside}>
          <h2>
            <span>UNIQUE</span>TECH
          </h2>
        </div>
        <div className={styles.linklist}>
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">ABOUT</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">ACADEMIC</a>
          <a href="#">BLOG</a>
          <ul>
            <li>
              <a href="#"> CONTACT US</a>
            </li>
            <li style={{ fontWeight: `bold`, color: `var(--second-color)` }}>
              (+966-322 322)
            </li>
          </ul>
        </div>
        <div className={styles.responsivenavebar}>
          <ul className={styles.responsivebutton}>
            <li>
              <span>____</span>
            </li>
            <li>
              <span>____</span>
            </li>
            <li>
              <span>____</span>
            </li>
          </ul>

          <ul className={styles.resdropdownitems}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">ACADEMIC</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
