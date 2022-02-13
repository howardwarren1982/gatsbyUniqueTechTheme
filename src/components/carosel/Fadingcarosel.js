import React from "react"
import * as styles from "./Fadingcarosel.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

export default function Fadingcarosel() {
  return (
    <div className={styles.carosel}>
      <Carousel fade>
        <Carousel.Item>
          <StaticImage
            className={styles.heroCaroselImage}
            src="../../images/laptopPhone.png"
            width={650}
            alt="Phone and laptop side by side"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            className={styles.heroCaroselImage}
            src="../../images/seopic.jpg"
            width={650}
            alt="Phone and laptop side by side"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            className={styles.heroCaroselImage}
            src="../../images/picjumbocom.jpg"
            width={650}
            alt="Phone and laptop side by side"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
