import React from "react"
import * as style from "./footer.module.scss"

// layoutStyle.flexspacebetween 'footerlinks'

export default function Footersection() {
  return (
    <div>
      <div className={style.row}>
        <div className="flex flexspacebetween">
          <ul className="portfolio">
            <li className={style.listheading}>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">Branding & Identity</a>
            </li>
            <li>
              <a href="">Mobile Design</a>
            </li>
            <li>
              <a href="">Print</a>
            </li>
            <li>
              <a href="">User Interface</a>
            </li>
          </ul>
          <ul className="about">
            <li className={style.listheading}>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">The Company</a>
            </li>
            <li>
              <a href="">History</a>
            </li>
            <li>
              <a href="">Vision</a>
            </li>
          </ul>
          <ul className="gallery">
            <li className={style.listheading}>
              <a href="">GALLERY</a>
            </li>
            <li>
              <a href="">Flickr</a>
            </li>
            <li>
              <a href="">Picasa</a>
            </li>
            <li>
              <a href="">iStockPhoto</a>
            </li>
            <li>
              <a href="">PhotoDune</a>
            </li>
          </ul>
          <ul className="contact">
            <li className={style.listheading}>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">Basic Info</a>
            </li>
            <li>
              <a href="">Map</a>
            </li>
            <li>
              <a href="">Contact Form</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.row}>
        <div className="center">
          <div className="otherlinks">
            <div className={`${style.row} ${style.soclist} flex center`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={style.copyright}>
            Copyright &copy; 2015 Syed Miraj.All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
